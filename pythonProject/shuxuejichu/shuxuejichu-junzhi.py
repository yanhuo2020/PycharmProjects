# 两个常用的统计包
import numpy as np
import scipy.stats as stats
# 我们拿两个数据集来举例
x1 = [1, 2, 2, 3, 4, 5, 5, 7]
x2 = x1 + [100]
#平均数-------------------------------------------------------
print('x1的平均值:', sum(x1), '/', len(x1), '=', np.mean(x1))
print('x2的平均值:', sum(x2), '/', len(x2), '=', np.mean(x2))
#中位数-------------------------------------------------------
print('x1的中位数:', np.median(x1))
print('x2的中位数:', np.median(x2))

#众数---------------------------------------------------------
print('One mode of x1:', stats.mode(x1)[0][0])
# 因此我们自定义一个求众数的函数
def mode(l):
    # 统计列表中每个元素出现的次数
    counts = {}
    for e in l:
        if e in counts:
            counts[e] += 1
        else:
            counts[e] = 1
    # 返回出现次数最多的元素
    maxcount = 0
    modes = {}
    for (key, value) in counts.items():
        if value > maxcount:
            maxcount = value
            modes = {key}
        elif value == maxcount:
            modes.add(key)
    if maxcount > 1 or len(l) == 1:
        return list(modes)
    return 'No mode'
print('All of the modes of x1:', mode(x1))

#几何平均数
# 使用Scipy包中的gmean函数来计算几何平均值
print('x1几何平均值:', stats.gmean(x1))
print('x2几何平均值:', stats.gmean(x2))
#调和平均值 我们可以使用现成的函数来计算调和平均值
print('x1的调和平均值:', stats.hmean(x1))
print('x2的调和平均值:', stats.hmean(x2))

