import numpy as np


np.random.seed(121)
# 生成20个小于100的随机整数
X = np.random.randint(100, size=20)
# Sort them
X = np.sort(X)
print('X: %s' %(X))
mu = np.mean(X)
print('X的平均值:', mu)
#Range(范围)
print('Range of X: %s' %(np.ptp(X)))

#MAD(平均绝对偏差)
abs_dispersion = [np.abs(mu - x) for x in X]
MAD = np.sum(abs_dispersion)/len(abs_dispersion)
print('X的平均绝对偏差:', MAD)
#方差和标准差
print('X的方差:', np.var(X))
print('X的标准差:', np.std(X))
#半方差和半标准差
# 没有现成的计算半方差的函数，因此我们手动计算：
lows = [e for e in X if e <= mu]
semivar = np.sum( (lows - mu) ** 2 ) / len(lows)
print('X的半方差:', semivar)
print('X的半标准差:', np.sqrt(semivar))