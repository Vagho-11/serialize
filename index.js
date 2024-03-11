import { serialize } from "./serialize";
import { deserialize } from "./deserialize";
import { tests } from "./test";


tests.forEach(test => {
    const serialized = serialize(test);
    const deserialized = deserialize(serialized);
    const compressionRatio = serialized.length / (test.length * 2);
    console.log("Исходный массив:", test);
    console.log("Сериализованная строка:", serialized);
    console.log("Коэффициент сжатия:", compressionRatio);
    console.log("Десериализованный массив:", deserialized);
});