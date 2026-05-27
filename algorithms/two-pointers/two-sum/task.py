"""
Дан отсортированный массив nums и число target. 
Нужно вернуть позиции двух чисел, которые дают в сумме target, 
при этом ответ гарантированно присутствует и он единственный.

Нужно вернуть сначала меньший индекс, а потом больший (индексы 
не могут быть равными). При этом индексация в массиве начинается
 с единицы, а не с нуля.

ВАЖНО: реши за O(1) по памяти

Пример 1:

Ввод: nums = [-2,1,6,9,12], target=18
Вывод: [3,5]
Объяснение: 18 = 6 + 12, 6-ка имеет индекс 3, а 12 - индекс 5

Пример 2:

Ввод: nums = [3,3,12], target=6
Вывод: [1,2]

Ограничения:

    len(nums) >= 2
"""

import pytest

def two_sum(nums: list[int], target: int) -> list[int]:
    left = 0
    right = len(nums) - 1
    res = [-1, -1]

    while(left != right):
        print(left, right)
        if(nums[left] + nums[right] < target):
            left += 1
        elif (nums[left] + nums[right] > target):
            right -= 1
        elif (nums[left] + nums[right] == target):
            res = [left+1, right+1]
            break
    
    return res


@pytest.mark.parametrize(
    "nums, target, expected",
    [
        ([-2, 1, 6, 9, 12], 18, [3, 5]),
        ([3, 3, 12], 6, [1, 2]),
        ([1, 2], 3, [1, 2]),
        ([2, 7, 11, 15], 9, [1, 2]),
        ([2, 7, 11, 15], 26, [3, 4]),
        ([1, 2, 3, 8], 9, [1, 4]),
        ([1, 3, 4, 5, 7, 11], 9, [3, 4]),
        ([-8, -5, -3, -1], -8, [2, 3]),
        ([-10, -3, 0, 5, 9, 11], 2, [2, 4]),
        ([0, 0, 3, 4], 0, [1, 2]),
    ],
    ids=[
        "example1",
        "example2",
        "minimum-length",
        "answer-at-start",
        "answer-at-end",
        "answer-at-both-ends",
        "answer-adjacent-middle",
        "all-negatives",
        "mixed-signs",
        "duplicate-zeros-target-zero",
    ],
)
def test_two_sum(nums, target, expected):
    assert two_sum(nums, target) == expected
