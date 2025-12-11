//получение модулей (импорт)
import { print, log } from "./text-helpers";
import freel from "./mt-freel";

print("printing a message");
log("logging a message");

freel.print();
//можно заменить имена импортируемого
import { print as p, log as l } from "./text-helpers";

p("printing a message");
l("logging a message");
//можно импортировать всё в одно значение
import * as fns from './text-helpers'

//важно, синтаксис импорта и экспорта поддерживается не везде.
//Но, можно исполдьзовать вместе с Babel