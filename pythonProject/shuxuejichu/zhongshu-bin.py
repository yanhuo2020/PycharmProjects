# 两个常用的统计包
import numpy as np
import scipy.stats as stats

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

# 获取收益率数据并计算出mode
start = '2014-01-01'
end = '2015-01-01'
pricing = D.history_data('000002.SZA', fields=['close'], start_date=start, end_date=end)['close']
returns = pricing.pct_change()[1:]
print('收益率众数:', mode(returns))

# 由于所有的收益率都是不同的，所以我们使用频率分布来变相计算mode

hist, bins = np.histogram(returns, 20)  # 将数据分成20个bin
maxfreq = max(hist)
# 找出哪个bin里面出现的数据点次数最大，这个bin就当做计算出来的mode
print('Mode of bins:', [(bins[i], bins[i + 1]) for i, j in enumerate(hist) if j == maxfreq])