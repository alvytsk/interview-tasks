"""
Дан массив nums, отсортированный в неубывающем порядке. Нужно вернуть отсортированный массив, состоящий из всех элементов массива nums, возведенных в квадрат.

Неубывающий порядок – порядок, где каждый следующий элемент больше или равен предыдущему.

Пример 1:

Ввод: nums = [-3,-2,0,1,3,5]
Вывод: [0,1,4,9,9,25]

Пример 2:

Ввод: nums = [-5,-3,-1]
Вывод: [1,9,25]

Ограничения:

    len(nums) >= 1
"""

import pytest

def sorted_squares(nums: list[int]) -> list[int]:
    res = [0] * len(nums)
    left, right = 0, len(nums) - 1

    for i in range(len(nums)-1, -1, -1):
        if(nums[left]**2 > nums[right]**2):
            res[i] = nums[left]**2
            left += 1
        else:
            res[i] = nums[right]**2
            right -= 1
    
    return res;


@pytest.mark.parametrize(
    "nums, expected",
    [
        ([-3,-2,0,1,3,5], [0,1,4,9,9,25]),
        ([], []),
        ([-5, -3, -1], [1,9,25]),
        ([0, 1, 2], [0, 1, 4]),
        ([-1], [1]),
    ],
    ids=["example", "empty", "example2", "simple", "one-item"],
)
def test_square_sort(nums, expected):
    assert sorted_squares(nums) == expected
