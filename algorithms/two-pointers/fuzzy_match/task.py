"""
Даны две строки s и t. Необходимо определить, можно ли получить строку s, 
удаляя некоторые (возможно, ни одного) символы из строки t, 
не изменяя порядок оставшихся символов.

Пример 1:

Ввод: s = "abc", t = "a1b2c3"
Вывод: True
Объяснение: Можно удалить цифры из t, чтобы получить t = "abc"

Пример 2:

Ввод: s = "abc", t = "acb"
Вывод: False

Ограничения:

    len(s) ≥ 0
    len(t) ≥ 0
    Строки s и t содержат только ascii символы 
"""

import pytest

def fuzzy_match(s: str, t: str) -> bool:
    p1 = p2 = 0

    while(p1 < len(s) and p2 < len(t)):
        if(s[p1] == t[p2]):
            p1 += 1
        p2 += 1
    return p1 == len(s)

@pytest.mark.parametrize(
    "s, t, expected",
    [
        ("abc", "a1b2c3", True),
        ("abc", "acb", False),
        ("", "", True),
        ("", "anything", True),
        ("abc", "", False),
        ("abc", "abc", True),
        ("abc", "ab", False),
        ("ace", "abcde", True),
        ("aec", "abcde", False),
        ("aaa", "aabaa", True),
        ("aaaa", "aaa", False),
        ("a", "bbbab", True),
        ("z", "abc", False),
    ],
    ids=[
        "example1",
        "example2",
        "both-empty",
        "empty-s-nonempty-t",
        "nonempty-s-empty-t",
        "identical",
        "s-longer-than-t",
        "subsequence-gaps",
        "wrong-order",
        "repeated-chars-match",
        "not-enough-repeats",
        "single-char-present",
        "single-char-absent",
    ],
)
def test_fuzzy_match(s, t, expected):
    assert fuzzy_match(s, t) == expected