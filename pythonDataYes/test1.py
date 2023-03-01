import pandas as pd

start = '2013-01-01'  # 回测起始时间
end = '2021-01-01'  # 回测结束时间
universe = DynamicUniverse('A')  # 证券池，支持股票和基金、期货
benchmark = 'SH300'  # 策略参考基准
freq = 'd'  # 'd'表示使用日频率回测，'m'表示使用分钟频率回测
refresh_rate = 5  # 执行handle_data的时间间隔

accounts = {
    'stock_account': AccountConfig(account_type='security', capital_base=100000)
}


def initialize(context):  # 初始化策略运行环境
    context.amount = 300


def handle_data(context):  # 核心策略逻辑
    current_universe = context.get_universe(exclude_halt=True)
    history = context.history(symbol='all', time_range=20, attribute='closePrice', freq='d', style='ast')['closePrice']

    # 计算累计收益
    momentum = {'symbol': [], 'c_ret': []}
    for stock in current_universe:
        if history[stock][0]:
            industry = DataAPI.EquIndustryGet(ticker=stock, pandas="1")
            momentum['symbol'].append(stock)
            momentum['c_ret'].append(history[stock][-1] / history[stock][0])

    # 排序，取累计收益最高的20%
    momentum = pd.DataFrame(momentum).sort(columns='c_ret').reset_index()
    momentum = momentum[len(momentum) * 4 / 5:len(momentum)]
    buylist = momentum['symbol'].tolist()

    stock_account = context.get_account('stock_account')
    current_positions = stock_account.get_positions(exclude_halt=True)

    # 卖出不需要的股票
    for stock in current_positions:
        if stock not in buylist:
            stock_account.order_to(stock, 0)

    # 买入筛选出的股票
    for stock in buylist:
        if stock not in current_positions:
            stock_account.order_to(stock, context.amount)