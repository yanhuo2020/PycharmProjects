#相关系数就是用以反映变量之间相关关系密切程度的统计指标。
# 导入包
import numpy as np
import statsmodels.tsa.stattools as sts
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import statsmodels.api as sm
#随机数五相关性
X = np.random.randn(1000)
Y = np.random.randn(1000)
plt.scatter(X,Y)
plt.show()
print("correlation of X and Y is ")
np.corrcoef(X,Y)[0,1] # 可以看出，随机变量几乎不相关
#使用生成的相关序列，并加入正态分布的噪音
X = np.random.randn(1000)
Y = X + np.random.normal(0,0.1,1000)
plt.scatter(X,Y)
plt.show()
print("correlation of X and Y is ")
np.corrcoef(X,Y)[0,1]
#实际股票的相关性计算
# 计算两只股票的日收益率
Stock1 = D.history_data(["601186.SHA"],start_date='2016-12-01',end_date='2017-05-01',fields = ['close'])['close'].pct_change()[1:]
Stock2 = D.history_data(["601390.SHA"],start_date='2016-12-01',end_date='2017-05-01',fields = ['close'])['close'].pct_change()[1:]
plt.scatter(Stock1,Stock2)
plt.xlabel("601186.SHA daily return")
plt.ylabel("601390.SHA daily return")
plt.show()
print("the corrlation for two stocks is: ")
Stock2.corr(Stock1)
#计算滚动相关系数
Stock1 = D.history_data(["601186.SHA"],start_date='2010-01-01',end_date='2017-05-01',fields = ['close'])['close'].pct_change()[1:]
Stock2 = D.history_data(["601390.SHA"],start_date='2010-01-01',end_date='2017-05-01',fields = ['close'])['close'].pct_change()[1:]
# 借助Pandas包计算滚动相关系数
rolling_corr = pd.rolling_corr(Stock1,Stock2,60)
rolling_corr.index = D.trading_days(start_date='2010-01-01',end_date='2017-05-01').date[1:]
plt.plot(rolling_corr)
plt.xlabel('Day')
plt.ylabel('60-day Rolling Correlation')
plt.show()
#通过相关关系热力图可视化股票相关性
# 我们以10只股票举例
instruments = D.instruments()[:10]
Stock_matrix = D.history_data(instruments,start_date='2016-01-01',end_date='2016-09-01',fields=['close'])
# 不用收盘价数据，而是用收益率数据
# 通过pivot_table函数将Stock_matrix整理成一个以股票日收益率为列的df
Stock_matrix = pd.pivot_table(Stock_matrix,values='close',index=['date'],columns=['instrument']).apply(lambda x:x.pct_change())
Stock_matrix.head()
# 绘制相关系数热力图
mask = np.zeros_like(Stock_matrix.corr(), dtype=np.bool)
mask[np.triu_indices_from(mask)] = True
cmap = sns.diverging_palette(220, 10, as_cmap=True)
sns.heatmap(Stock_matrix.corr(), mask=mask, cmap=cmap)
plt.show()