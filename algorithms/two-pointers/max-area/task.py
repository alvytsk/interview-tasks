"""
Дан массив целых чисел height, height[i] – высота линии. 
Нужно найти максимальную площадь, которую может заполнить вода между двумя линиями.

ВАЖНО: площадь воды считается как min(height[i], height[j]) * (j - i), 
где i – индекс первой линии, а j - номер второй.

Ввод: height = [1,8,6,2,5,4,8,3,7]
Вывод: 49
Объяснение: 7 * (8 - 1) = 49, "1" -  индекс первой линии, "8" -  второй

Пример 2:

Ввод: height = [2,3,4,5]
Вывод: 6

Ограничения:

    len(height) >= 2
"""

import pytest

def max_area(nums: list[int]) -> int:
    left, right = 0, len(nums) - 1
    res = 0
    
    while (left < right):
        square = min(nums[left], nums[right]) * (right-left)
        if(res < square):
            res = square
        
        if(nums[left] < nums[right]):
            left += 1
        else: 
            right -= 1
            
    return res


@pytest.mark.parametrize(
    "nums, expected",
    [
        ([1, 8, 6, 2, 5, 4, 8, 3, 7], 49),
        ([2, 3, 4, 5], 6),
        ([1, 1], 1),
        ([4, 3, 2, 1, 4], 16),
        ([1, 2, 1], 2),
        ([1, 2, 3, 4, 5], 6),
        ([5, 4, 3, 2, 1], 6),
        ([5, 5, 5, 5], 15),
        ([1, 3, 2, 5, 25, 24, 5], 24),
    ],
    ids=[
        "example1",
        "example2",
        "minimum-length",
        "equal-ends",
        "peak-middle",
        "increasing",
        "decreasing",
        "all-equal",
        "tall-narrow-vs-short-wide",
    ],
)
def test_max_area(nums, expected):
    assert max_area(nums) == expected
