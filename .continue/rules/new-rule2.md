Правила для DeepSeek в проекте NeonPong

1. НИКОГДА не добавляй using UnityEngine.UI;
2. НЕ создавай новые файлы без явной просьбы
3. ДЛЯ БИБОВ: наследуй от BibBase, не пиши MonoBehaviour напрямую
4. ИСПОЛЬЗУЙ существующие переменные, не придумывай новые
5. ПРИ ИЗМЕНЕНИИ: показывай ТОЛЬКО изменённые строки с комментарием // CHANGED

Пример хорошего ответа:
```csharp
// CHANGED: строки 23-27
public void Move() {
    float speed = GetSpeed(); // CHANGED: теперь использует GetSpeed()
    transform.Translate(Vector3.right * speed);
}
+ давай подробные объяснения к коду для чайника-программера. хочу стать програмистом.---
description: A description of your rule
---

Your rule content