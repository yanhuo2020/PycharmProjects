import numpy as np
a = np.arange(24)
print(a.ndim)  # a 现只有一个维度
# 现在调整其大小
b = a.reshape(2, 4, 3)  # b 现在拥有三个维度
print(b.ndim)
#ndarray.shape 表示数组的维度，返回一个元组，这个元组的长度就是维度的数目，即 ndim 属性(秩)。比如，一个二维数组，其维度表示"行数"和"列数"。ndarray.shape 也可以用于调整数组大小。
a = np.array([[1,2,3],[4,5,6]])
print (a.shape)
a.shape =  (3,2)
print (a)
#NumPy 也提供了 reshape 函数来调整数组大小。
a = np.array([[1,2,3],[4,5,6]])
b = a.reshape(3,2)
print (b)

#ndarray.itemsize 以字节的形式返回数组中每一个元素的大小。
# 数组的 dtype 为 int8（一个字节）
x = np.array([1, 2, 3, 4, 5], dtype=np.int8)
print(x.itemsize)
# 数组的 dtype 现在为 float64（八个字节）
y = np.array([1, 2, 3, 4, 5], dtype=np.float64)
print(y.itemsize)

#ndarray.flags 返回 ndarray 对象的内存信息，包含以下属性：
x = np.array([1,2,3,4,5])
print (x.flags)