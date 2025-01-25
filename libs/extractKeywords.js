import nlp from "compromise";
const stopWords = new Set([
    "Alibaug",
    "Cuffe Parade",
    "Lonavala",
    "Juhu",
    "Goregaon",
    "Bandra",
    "South Mumbai",
    "Kandivali",
    "Chembur",
    "Mira Road",
    "Marine Drive",
    "Powai",
    "Vashi",
    "Tardeo",
    "Dadar West",
    "Virar",
    "Pali Hill",
    "Versova",
    "Worli",
    "Borivali",
    "Grant Road",
    "Andheri East",
    "Bandra East",
    "Byculla",
    "Seawoods",
    "Colaba",
    "Kalyan",
    "Ghatkopar",
    "Santan Cruz"
]);

export default function extractKeywords(sentence) {
    const doc = nlp(sentence);
    const terms = doc.terms().out("array");
    const keywords = terms.filter((word) => !stopWords.has(word.toLowerCase()));
    return keywords;
}
