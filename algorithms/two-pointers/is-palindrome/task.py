"""
Дана строка s. Верните true, если s является палиндромом, или false в противном случае. 
Фраза является палиндромом, если после преобразования всех заглавных букв в строчные и 
удаления всех символов, кроме букв и цифр, она читается одинаково слева направо и справа налево.

Буквенно-цифровые символы включают латинские буквы и цифры.

Пример 1:

Ввод: s = "A man, a plan, a canal: Panama"
Вывод: true
Объяснение: строка "amanaplanacanalpanama" является палиндромом

Пример 2:

Ввод: s = "AbaCdaba"
Вывод: false

Ограничения:

    len(s) >= 1
"""

import pytest

def is_palindrome(s: str) -> bool:
    left, right = 0, len(s) - 1

    while(left < right):
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if(s[left].lower() != s[right].lower()):
            return False
        left += 1
        right -= 1 

    return True

@pytest.mark.parametrize(
    "s, expected",
    [
        ("A man, a plan, a canal: Panama", True),
        ("AbaCdaba", False),
        ("a", True),
        (" ", True),
        (".,", True),
        ("0P", False),
        ("aba", True),
        ("abba", True),
        ("abca", False),
        ("Was it a car or a cat I saw?", True),
        ("12321", True),
        ("1231", False),
        ("RaceCar", True),
    ],
    ids=[
        "example1",
        "example2",
        "single-char",
        "only-space",
        "only-punctuation",
        "digit-letter-mismatch",
        "odd-palindrome",
        "even-palindrome",
        "not-palindrome",
        "sentence-with-punctuation",
        "numeric-palindrome",
        "numeric-not-palindrome",
        "mixed-case",
    ],
)
def test_is_palindrome(s, expected):
    assert is_palindrome(s) == expected