import numpy as np
a = np.array([1,2,3])
print (a)

# 多于一个维度
a = np.array([[1,  2],  [3,  4]])
print (a)

# 最小维度
a = np.array([1,  2,  3,4,5], ndmin =  2)
print (a)

# dtype 参数
a = np.array([1,  2,  3], dtype = complex)
print (a)