
import { GoogleGenAI } from "@google/genai";
import { Hexagram, Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const interpretHexagram = async (hexagram: Hexagram, lang: Language = 'zh', userContext?: string) => {
  const isEn = lang === 'en';
  const prompt = isEn ? `
    As a master of I Ching, please interpret the following hexagram:
    Name: ${hexagram.nameEn} (${hexagram.pinyin})
    Number: ${hexagram.number}
    Judgment: ${hexagram.judgmentEn}
    Image: ${hexagram.imageEn}
    Basic Meaning: ${hexagram.meaningEn}
    
    ${userContext ? `User context/question: ${userContext}` : 'Please provide deep insights and wisdom for modern life.'}
    
    Requirements:
    1. Elegant and accessible language.
    2. Include "General Fortune", "Career Advice", and "Life Philosophy".
    3. Consider the dynamics of Yin and Yang.
    Response MUST be in English.
  ` : `
    作为一位精通《易经》的国学大师，请解读以下卦象：
    卦名：${hexagram.name} (${hexagram.pinyin})
    卦序：第${hexagram.number}卦
    卦辞：${hexagram.judgment}
    象辞：${hexagram.image}
    基础含义：${hexagram.meaning}
    
    ${userContext ? `用户提出的问题或背景：${userContext}` : '请深入浅出地讲解这一卦在现代生活中的启示和智慧。'}
    
    要求：
    1. 用语典雅且易懂。
    2. 包含“整体运势”、“事业指导”、“处世哲学”三个维度。
    3. 结合该卦的阴阳变动特征。
    必须使用中文回答。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || (isEn ? "The master is meditating..." : "大师正在沉思。");
  } catch (error) {
    console.error("Gemini Interpretation Error:", error);
    return isEn ? "Error during interpretation." : "抱歉，解读智慧时遇到了些阻碍。";
  }
};

export const chatWithScholar = async (message: string, history: {role: string, parts: {text: string}[]}[], lang: Language = 'zh') => {
    const isEn = lang === 'en';
    try {
        const chat = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
                systemInstruction: isEn ? 
                "You are an elegant I Ching scholar. You popularize I Ching wisdom to young people, explain hexagram logic, and discuss philosophy rationally. Avoid superstition, emphasize the core ideas of 'Changelessness, Simplicity, and Change'. Respond in English." :
                "你是一位温文尔雅的《易经》学者。你致力于向年轻人普及易经的智慧，解释64卦的逻辑，并以客观、理性的态度探讨人生哲学。不宣扬迷信，强调的是‘不易、简易、变易’的核心思想。请用中文回答。"
            },
            history: history && history.length > 0 ? history : undefined
        });
        
        const response = await chat.sendMessage({ message });
        return response.text || (isEn ? "Beyond words." : "悟道之深，无以言表。");
    } catch (error) {
        console.error("Scholar Chat Error:", error);
        return isEn ? "I could not perceive your intention." : "在此静思中，我未能感悟到您的意图。";
    }
}
