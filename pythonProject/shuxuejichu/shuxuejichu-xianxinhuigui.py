import numpy as np
from statsmodels import regression
import statsmodels.api as sm
import matplotlib.pyplot as plt
import seaborn
import math
# 编辑线性回归函数
def linreg(X,Y):
    # 运行线性回归
    X = sm.add_constant(X)
    model = regression.linear_model.OLS(Y, X).fit()
    a = model.params[0]
    b = model.params[1]
    X = X[:, 1]

    # 返回信息并绘图
    X2 = np.linspace(X.min(), X.max(), 100)
    Y_hat = X2 * b + a
    plt.scatter(X, Y, alpha=0.3) # 显示原始数据
    plt.plot(X2, Y_hat, 'r', alpha=0.9);  # 添加拟合直线
    plt.xlabel('X Value')
    plt.ylabel('Y Value')
    return model.summary()


start_date = '2016-01-01'
end_date = '2017-04-11'
# 获取浦发银行的价格数据
asset = D.history_data('600000.SHA', start_date, end_date, fields=['close']).set_index('date')['close']
benchmark = D.history_data('000300.SHA', start_date, end_date, fields=['close']).set_index('date')['close']

# 通过价格数据计算收益率数据并删除第一个元素，因为其为缺失值
r_a = asset.pct_change()[1:]
r_b = benchmark.pct_change()[1:]
linreg(r_b.values, r_a.values)


#增加置信区间
start_date = '2016-01-01'
end_date = '2017-05-08'
asset = D.history_data('600000.SHA', start_date, end_date, fields=['close']).set_index('date')['close']
benchmark = D.history_data('000300.SHA', start_date, end_date, fields=['close']).set_index('date')['close']
# 删除第一个元素（0th）,因为其为缺失值
r_a = asset.pct_change()[1:]
r_b = benchmark.pct_change()[1:]
seaborn.regplot(r_b.values, r_a.values)