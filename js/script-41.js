// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой,
// а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться
// массив объектов со следующими свойствами.

const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
        return this.potions;
    },
  
    addPotion(potionName) {
        this.potions.push(potionName);
    },
  
    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            if (this.potions[i].name === potionName) {
                this.potions.splice(i, 1);
                return this.potions
            }
        }
    },
    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            if (this.potions[i].name == oldName) {
                this.potions[i].name = newName;
                this.potions.splice(i, 1, this.potions[i]);
                return this.potions
            }
        }
    }
}