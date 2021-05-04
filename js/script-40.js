// Дополни метод updatePotionName(oldName, newName) так,
// чтобы он обновлял название зелья с oldName на newName,
// в массиве зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
 const indexOf = this.potions.indexOf(oldName)
       this.potions.splice(indexOf, 1, newName);
      
       return this.potions;
    // Пиши код выше этой строки
  },
};