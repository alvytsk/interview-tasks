"""
Даны два отсортированных по возрастанию массива nums1 и nums2. 
Необходимо вернуть новый массив nums3, который содержит все общие 
элементы из nums1 и nums2.

Результат должен быть также отсортирован по возрастанию. Если элементы 
встречаются в массивах несколько раз, то их нужно продублировать в ответе.

Пример 1:

Ввод: nums1 = [-3,2,2,5,8,19,31], nums2 = [1,2,2,2,6,19,52]
Вывод: [2,2,19]

Пример 2:

Ввод: nums1 = [-5,4], nums2 = [1,2]
Вывод: []

Пример 3:

Ввод: nums1 = [], nums2 = [1,2]
Вывод: []

Ограничения:

    len(nums1), len(nums2) >= 0
"""

import pytest

def intersect(nums1: list[int], nums2: list[int]) -> list[int]:
    p1,p2 = 0,0
    res = []

    while (p1 < len(nums1)) and (p2 < len(nums2)):
        if(nums1[p1] == nums2[p2]):
            res.append(nums1[p1])
            p1 += 1
            p2 += 1
        elif(nums1[p1] < nums2[p2]):
            p1 += 1
        elif (nums1[p1] > nums2[p2]):
            p2 += 1
            
    return res


@pytest.mark.parametrize(
    "nums1, nums2, expected",
    [
        ([-3, 2, 2, 5, 8, 19, 31], [1, 2, 2, 2, 6, 19, 52], [2, 2, 19]),
        ([-5, 4], [1, 2], []),
        ([], [1, 2], []),
        ([1, 2], [], []),
        ([], [], []),
        ([1, 2, 3], [1, 2, 3], [1, 2, 3]),
        ([1, 1, 1], [1, 1], [1, 1]),
        ([1, 2, 3], [4, 5, 6], []),
        ([-3, -2, -1], [-2, -1, 0], [-2, -1]),
        ([1, 5, 9], [1, 5, 9], [1, 5, 9]),
        ([2], [2], [2]),
        ([2], [3], []),
    ],
    ids=[
        "example1",
        "example2",
        "example3-empty-first",
        "empty-second",
        "both-empty",
        "identical",
        "duplicates-capped-by-shorter",
        "disjoint",
        "negatives",
        "all-common",
        "single-match",
        "single-no-match",
    ],
)
def test_intersect(nums1, nums2, expected):
    assert intersect(nums1, nums2) == expected