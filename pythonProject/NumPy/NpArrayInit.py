#numpy.empty 方法用来创建一个指定形状（shape）、数据类型（dtype）且未初始化的数组：
import numpy as np
x = np.empty([3,2], dtype = int)
print (x)
#创建指定大小的数组，数组元素以 0 来填充：
# 默认为浮点数
x = np.zeros(5)
print(x)
# 设置类型为整数
y = np.zeros((5,), dtype=np.int)
print(y)
# 自定义类型
z = np.zeros((2, 2), dtype=[('x', 'i4'), ('y', 'i4')])
print(z)
#创建指定形状的数组，数组元素以 1 来填充：
# 默认为浮点数
x = np.ones(5)
print(x)
# 自定义类型
x = np.ones([2, 2], dtype=int)
print(x)
#将列表转换为 ndarray:
x =  [1,2,3]
a = np.asarray(x)
print (a)