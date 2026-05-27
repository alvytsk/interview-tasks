"""
Дан список символов chars. Нужно развернуть chars и вернуть измененный список в качестве ответа. Использовать встроенную функцию разворота нельзя.

Пример 1:

Ввод: chars = ["p","e","r","f","e","c","t","i","o","n"]
Вывод: ["n","o","i","t","c","e","f","r","e","p"]

Пример 2:

Ввод: chars = ["r","e","v","e","r","s","e"]
Вывод: ["e","s","r","e","v","e","r"]

Ограничения:

    len(chars) >= 0
    chars содержит только ascii символы
"""

import pytest

def reverse(chars: list[str]) -> list[str]:
    left, right = 0, len(chars) - 1

    while(left < right): 
        tmp = chars[right]
        chars[right] = chars[left]
        chars[left] = tmp
        left += 1
        right -= 1

    return chars 

@pytest.mark.parametrize(
    "chars, expected",
    [
        (
            ["p", "e", "r", "f", "e", "c", "t", "i", "o", "n"],
            ["n", "o", "i", "t", "c", "e", "f", "r", "e", "p"],
        ),
        (
            ["r", "e", "v", "e", "r", "s", "e"],
            ["e", "s", "r", "e", "v", "e", "r"],
        ),
        ([], []),
        (["a"], ["a"]),
        (["a", "b"], ["b", "a"]),
        (["a", "b", "c"], ["c", "b", "a"]),
        (["x", "x", "x"], ["x", "x", "x"]),
        (["a", "b", "b", "a"], ["a", "b", "b", "a"]),
        (["1", " ", "!", "A"], ["A", "!", " ", "1"]),
    ],
    ids=[
        "example1",
        "example2",
        "empty",
        "single-char",
        "two-chars",
        "odd-length",
        "all-same",
        "palindrome-unchanged",
        "mixed-ascii",
    ],
)
def test_reverse(chars, expected):
    assert reverse(chars) == expected