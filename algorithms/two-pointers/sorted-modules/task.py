"""
Дан массив nums, отсортированный по возрастанию. Нужно вернуть отсортированный массив,
полученный путём взятия модуля от каждого элемента nums.

Ввод: nums = [-3,-2,0,1,3,5]
Вывод: nums = [0,1,2,3,3,5]
"""

import pytest

# var 1
# def sorted_abs(nums: list[int]) -> list[int]:
#     res = [0] * len(nums)
#     left, right = 0, len(nums) - 1
#     for i in range(len(nums) - 1, -1, -1):
#         if abs(nums[left]) > abs(nums[right]):
#             res[i] = abs(nums[left])
#             left += 1
#         else:
#             res[i] = abs(nums[right])
#             right -= 1
#     return res

# var 2
def sorted_abs(nums: list[int]) -> list[int]: 
    res= []
    p1 = 0;
    p2 = len(nums) - 1 
    while(p1 <= p2):
        if abs(nums[p1]) > abs(nums[p2]):
            res.append(abs(nums[p1]))
            p1 += 1
        else:
            res.append(abs(nums[p2]))
            p2 -= 1
    return list(reversed(res))

# --- tests: pytest collects every test_* function in this file ---

# parametrize = one test, many cases. Each tuple becomes a separate test
# with its own pass/fail, and `ids` gives each a readable name in output.
@pytest.mark.parametrize(
    "nums, expected",
    [
        ([-3, -2, 0, 1, 3, 5], [0, 1, 2, 3, 3, 5]),
        ([], []),
        ([-5, -3, -1], [1, 3, 5]),
        ([0, 1, 2], [0, 1, 2]),
        ([-1], [1]),
    ],
    ids=["example", "empty", "all_negative", "all_positive", "single"],
)
def test_sorted_abs(nums, expected):
    assert sorted_abs(nums) == expected
