
import { Trigram, Hexagram } from './types';

export const TRIGRAMS: Record<string, Trigram> = {
  "乾": { name: "乾", nameEn: "Qián", pinyin: "Qián", symbol: "☰", nature: "天", natureEn: "Heaven", attribute: "健", attributeEn: "Creative", lines: [1, 1, 1] },
  "坤": { name: "坤", nameEn: "Kūn", pinyin: "Kūn", symbol: "☷", nature: "地", natureEn: "Earth", attribute: "顺", attributeEn: "Receptive", lines: [0, 0, 0] },
  "震": { name: "震", nameEn: "Zhèn", pinyin: "Zhèn", symbol: "☳", nature: "雷", natureEn: "Thunder", attribute: "动", attributeEn: "Arousing", lines: [0, 0, 1] }, 
  "巽": { name: "巽", nameEn: "Xùn", pinyin: "Xùn", symbol: "☴", nature: "风", natureEn: "Wind", attribute: "入", attributeEn: "Gentle", lines: [1, 1, 0] }, 
  "坎": { name: "坎", nameEn: "Kǎn", pinyin: "Kǎn", symbol: "☵", nature: "水", natureEn: "Water", attribute: "陷", attributeEn: "Abysmal", lines: [0, 1, 0] },
  "离": { name: "离", nameEn: "Lí", pinyin: "Lí", symbol: "☲", nature: "火", natureEn: "Fire", attribute: "丽", attributeEn: "Clinging", lines: [1, 0, 1] },
  "艮": { name: "艮", nameEn: "Gèn", pinyin: "Gèn", symbol: "☶", nature: "山", natureEn: "Mountain", attribute: "止", attributeEn: "Keeping Still", lines: [1, 0, 0] },
  "兑": { name: "兑", nameEn: "Duì", pinyin: "Duì", symbol: "☱", nature: "泽", natureEn: "Lake", attribute: "说", attributeEn: "Joyous", lines: [0, 1, 1] },
};

export const SOLAR_TERMS = [
  { zh: "冬至", en: "Winter Solstice" }, { zh: "小寒", en: "Slight Cold" }, { zh: "大寒", en: "Great Cold" },
  { zh: "立春", en: "Beginning of Spring" }, { zh: "雨水", en: "Rain Water" }, { zh: "惊蛰", en: "Insects Awakening" }, 
  { zh: "春分", en: "Spring Equinox" }, { zh: "清明", en: "Pure Brightness" }, { zh: "谷雨", en: "Grain Rain" },
  { zh: "立夏", en: "Beginning of Summer" }, { zh: "小满", en: "Grain Buds" }, { zh: "芒种", en: "Grain in Ear" }, 
  { zh: "夏至", en: "Summer Solstice" }, { zh: "小暑", en: "Slight Heat" }, { zh: "大暑", en: "Great Heat" },
  { zh: "立秋", en: "Beginning of Autumn" }, { zh: "处暑", en: "End of Heat" }, { zh: "白露", en: "White Dew" }, 
  { zh: "秋分", en: "Autumn Equinox" }, { zh: "寒露", en: "Cold Dew" }, { zh: "霜降", en: "Frost's Descent" },
  { zh: "立冬", en: "Beginning of Winter" }, { zh: "小雪", en: "Slight Snow" }, { zh: "大雪", en: "Great Snow" }
];

export const HEXAGRAMS: Hexagram[] = [
  { 
    number: 1, name: "乾", nameEn: "The Creative", pinyin: "Qián", binary: "111111", upperTrigram: "乾", lowerTrigram: "乾", 
    judgment: "元，亨，利，贞。", judgmentEn: "The Creative works sublime success, furthering through perseverance.",
    image: "天行健，君子以自强不息。", imageEn: "The movement of heaven is full of power. Thus the superior man makes himself strong and untiring.",
    meaning: "纯阳至健，象征天。", meaningEn: "Pure Yang, supreme strength, symbolizing Heaven.", fuxiIndex: 63 
  },
  { 
    number: 2, name: "坤", nameEn: "The Receptive", pinyin: "Kūn", binary: "000000", upperTrigram: "坤", lowerTrigram: "坤", 
    judgment: "元，亨，利牝马之贞。", judgmentEn: "The Receptive brings about sublime success, furthering through the perseverance of a mare.",
    image: "地势坤，君子以厚德载物。", imageEn: "The earth's condition is receptive devotion. Thus the superior man who has breadth of character carries the outer world.",
    meaning: "至柔至顺，象征地。", meaningEn: "Supreme softness and obedience, symbolizing Earth.", fuxiIndex: 0 
  },
  { 
    number: 3, name: "屯", nameEn: "Difficulty at the Beginning", pinyin: "Zhūn", binary: "010001", upperTrigram: "坎", lowerTrigram: "震", 
    judgment: "元，亨，利，贞。", judgmentEn: "Difficulty at the Beginning works sublime success, furthering through perseverance.",
    image: "云雷，屯；君子以经纶。", imageEn: "Clouds and thunder: the image of Difficulty at the Beginning. Thus the superior man brings order out of confusion.",
    meaning: "草木萌芽，充满阻力但富有生机。", meaningEn: "Sprouting plants, full of resistance but full of life.", fuxiIndex: 17 
  },
  { 
    number: 4, name: "蒙", nameEn: "Youthful Folly", pinyin: "Méng", binary: "100010", upperTrigram: "艮", lowerTrigram: "坎", 
    judgment: "亨。匪我求童蒙，童蒙求我。", judgmentEn: "Youthful Folly has success. It is not I who seek the young fool; the young fool seeks me.",
    image: "山下出泉，蒙；君子以果行育德。", imageEn: "A spring wells up at the foot of the mountain: the image of Youth. Thus the superior man fosters his character by thoroughness in all that he does.",
    meaning: "启蒙、教育、幼稚。", meaningEn: "Enlightenment, education, and immaturity.", fuxiIndex: 34 
  },
  { 
    number: 5, name: "需", nameEn: "Waiting (Nourishment)", pinyin: "Xū", binary: "010111", upperTrigram: "坎", lowerTrigram: "乾", 
    judgment: "有孚，光亨，贞吉。", judgmentEn: "Waiting. If you are sincere, you have light and success. Perseverance brings good fortune.",
    image: "云上于天，需；君子以饮食宴乐。", imageEn: "Clouds rise up to heaven: the image of Waiting. Thus the superior man eats and drinks, is joyous and of good cheer.",
    meaning: "等待时机，守正待发。", meaningEn: "Waiting for the right moment, staying upright.", fuxiIndex: 23 
  },
  { 
    number: 6, name: "讼", nameEn: "Conflict", pinyin: "Sòng", binary: "111010", upperTrigram: "乾", lowerTrigram: "坎", 
    judgment: "有孚，窒惕，中吉，终凶。", judgmentEn: "Conflict. You are sincere and are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune.",
    image: "天与水违行，讼；君子以作事谋始。", imageEn: "Heaven and water go their separate ways: the image of Conflict. Thus in all his transactions the superior man carefully considers the beginning.",
    meaning: "争端、诉讼、不和。", meaningEn: "Disputes, litigation, and discord.", fuxiIndex: 58 
  },
  { 
    number: 7, name: "师", nameEn: "The Army", pinyin: "Shī", binary: "000010", upperTrigram: "坤", lowerTrigram: "坎", 
    judgment: "贞，大人吉，无咎。", judgmentEn: "The Army. The army needs perseverance and a strong man. Good fortune without blame.",
    image: "地中有水，师；君子以容民畜众。", imageEn: "In the middle of the earth is water: the image of the Army. Thus the superior man increases his masses by generosity toward the people.",
    meaning: "统帅、军队、组织。", meaningEn: "Commanders, military, and organization.", fuxiIndex: 2 
  },
  { 
    number: 8, name: "比", nameEn: "Holding Together", pinyin: "Bǐ", binary: "010000", upperTrigram: "坎", lowerTrigram: "坤", 
    judgment: "吉。原筮元永贞。", judgmentEn: "Holding Together brings good fortune. Inquire of the oracle once again whether you have sublimity, constancy, and perseverance.",
    image: "地上有水，比；先王以建万国。", imageEn: "On the earth is water: the image of Holding Together. Thus the kings of antiquity established the many states and maintained friendly relations with the lords.",
    meaning: "亲近、辅助、团结。", meaningEn: "Intimacy, support, and unity.", fuxiIndex: 16 
  },
  { 
    number: 9, name: "小畜", nameEn: "The Taming Power of the Small", pinyin: "Xiǎo Xù", binary: "110111", upperTrigram: "巽", lowerTrigram: "乾", 
    judgment: "亨。密云不雨。", judgmentEn: "The Taming Power of the Small has success. Dense clouds, no rain from our western region.",
    image: "风行天上，小畜；君子以懿文德。", imageEn: "The wind drives across the heavens: the image of the Taming Power of the Small. Thus the superior man refines the outward aspect of his nature.",
    meaning: "小有蓄积，力量尚弱。", meaningEn: "Small accumulation, weak strength.", fuxiIndex: 55 
  },
  { 
    number: 10, name: "履", nameEn: "Treading (Conduct)", pinyin: "Lǚ", binary: "111011", upperTrigram: "乾", lowerTrigram: "兑", 
    judgment: "履虎尾，不咥人，亨。", judgmentEn: "Treading. Treading upon the tail of the tiger. It does not bite the man. Success.",
    image: "上天下泽，履；君子以辨上下。", imageEn: "Heaven above, the lake below: the image of Treading. Thus the superior man discriminates between high and low, and thereby fortifies the minds of the people.",
    meaning: "履行、礼仪、慎行。", meaningEn: "Performance, etiquette, and cautious action.", fuxiIndex: 59 
  },
  { 
    number: 11, name: "泰", nameEn: "Peace", pinyin: "Tài", binary: "000111", upperTrigram: "坤", lowerTrigram: "乾", 
    judgment: "小往大来，吉亨。", judgmentEn: "Peace. The small departs, the great approaches. Good fortune. Success.",
    image: "天地交，泰；后以财成天地之道。", imageEn: "Heaven and earth unite: the image of Peace. Thus the ruler divides and completes the course of heaven and earth.",
    meaning: "通泰、安稳、和谐。", meaningEn: "Prosperity, stability, and harmony.", fuxiIndex: 7, solarTerm: "正月卦", solarTermEn: "1st Lunar Month" 
  },
  { 
    number: 12, name: "否", nameEn: "Standstill (Stagnation)", pinyin: "Pǐ", binary: "111000", upperTrigram: "乾", lowerTrigram: "坤", 
    judgment: "否之匪人，不利君子贞。", judgmentEn: "Standstill. Evil people do not further the perseverance of the superior man. The great departs, the small approaches.",
    image: "天地不交，否；君子以俭德辟难。", imageEn: "Heaven and earth do not unite: the image of Standstill. Thus the superior man falls back upon his inner worth in order to escape the difficulties.",
    meaning: "闭塞、阻碍、不通。", meaningEn: "Obstruction, blockage, and standstill.", fuxiIndex: 56, solarTerm: "七月卦", solarTermEn: "7th Lunar Month" 
  },
  { 
    number: 13, name: "同人", nameEn: "Fellowship with Men", pinyin: "Tóng Rén", binary: "111101", upperTrigram: "乾", lowerTrigram: "离", 
    judgment: "同人于野，亨。", judgmentEn: "Fellowship with Men in the open. Success. It furthers one to cross the great water. Perseverance of the superior man furthers.",
    image: "天与火，同人；君子以类族辨物。", imageEn: "Heaven together with fire: the image of Fellowship with Men. Thus the superior man organizes the clans and makes distinctions between things.",
    meaning: "志同道合、大同。", meaningEn: "Like-mindedness, great harmony.", fuxiIndex: 61 
  },
  { 
    number: 14, name: "大有", nameEn: "Possession in Great Measure", pinyin: "Dà Yǒu", binary: "101111", upperTrigram: "离", lowerTrigram: "乾", 
    judgment: "元亨。", judgmentEn: "Possession in Great Measure works supreme success.",
    image: "火在天上，大有；君子以遏恶扬善。", imageEn: "Fire in heaven above: the image of Possession in Great Measure. Thus the superior man curbs evil and furthers good, and thereby obeys the benevolent will of heaven.",
    meaning: "富有、兴旺、大获。", meaningEn: "Wealthy, prosperous, and successful.", fuxiIndex: 47 
  },
  { 
    number: 15, name: "谦", nameEn: "Modesty", pinyin: "Qiān", binary: "000100", upperTrigram: "坤", lowerTrigram: "艮", 
    judgment: "亨，君子有终。", judgmentEn: "Modesty creates success. The superior man carries things through to the end.",
    image: "地中有山，谦；君子以裒多益寡。", imageEn: "Within the earth, a mountain: the image of Modesty. Thus the superior man reduces that which is too much and augments that which is too little.",
    meaning: "谦虚、退让、低调。", meaningEn: "Modesty, withdrawal, and low profile.", fuxiIndex: 4 
  },
  { 
    number: 16, name: "豫", nameEn: "Enthusiasm", pinyin: "Yù", binary: "001000", upperTrigram: "震", lowerTrigram: "坤", 
    judgment: "利建侯行师。", judgmentEn: "Enthusiasm. It furthers one to install helpers and to set armies in motion.",
    image: "雷出地奋，豫；先王以作乐崇德。", imageEn: "Thunder comes resounding out of the earth: the image of Enthusiasm. Thus the ancient kings made music in order to honor merit.",
    meaning: "喜悦、安乐、预备。", meaningEn: "Joy, peace, and preparation.", fuxiIndex: 8 
  },
  { 
    number: 17, name: "随", nameEn: "Following", pinyin: "Suí", binary: "011001", upperTrigram: "兑", lowerTrigram: "震", 
    judgment: "元亨利贞，无咎。", judgmentEn: "Following has supreme success. Perseverance furthers. No blame.",
    image: "泽中有雷，随；君子以向晦入宴息。", imageEn: "Thunder in the middle of the lake: the image of Following. Thus the superior man at nightfall goes indoors for rest and recuperation.",
    meaning: "随和、顺从、跟随。", meaningEn: "Amiability, obedience, and following.", fuxiIndex: 25 
  },
  { 
    number: 18, name: "蛊", nameEn: "Work on what has been spoiled (Decay)", pinyin: "Gǔ", binary: "100110", upperTrigram: "艮", lowerTrigram: "巽", 
    judgment: "元亨，利涉大川。", judgmentEn: "Work on what has been spoiled has supreme success. It furthers one to cross the great water.",
    image: "山下有风，蛊；君子以振民育德。", imageEn: "The wind blows low on the mountain: the image of Decay. Thus the superior man stirs up the people and strengthens their spirit.",
    meaning: "败坏、革新、治理。", meaningEn: "Decay, innovation, and governance.", fuxiIndex: 38 
  },
  { 
    number: 19, name: "临", nameEn: "Approach", pinyin: "Lín", binary: "000011", upperTrigram: "坤", lowerTrigram: "兑", 
    judgment: "元亨利贞。", judgmentEn: "Approach has supreme success. Perseverance furthers. When the eighth month comes, there will be misfortune.",
    image: "泽上有地，临；君子以教思无穷。", imageEn: "The earth above the lake: the image of Approach. Thus the superior man is inexhaustible in his will to teach.",
    meaning: "亲临、监视、壮大。", meaningEn: "Presence, supervision, and expansion.", fuxiIndex: 3, solarTerm: "十二月卦", solarTermEn: "12th Lunar Month" 
  },
  { 
    number: 20, name: "观", nameEn: "Contemplation (View)", pinyin: "Guān", binary: "110000", upperTrigram: "巽", lowerTrigram: "坤", 
    judgment: "盥而不荐，有孚颙若。", judgmentEn: "Contemplation. The ablution has been made, but not yet the offering. Full of trust they look up to him.",
    image: "风行地上，观；先王以省方观民设教。", imageEn: "The wind blows over the earth: the image of Contemplation. Thus the kings of old visited the regions of the world and contemplated the people.",
    meaning: "观察、感悟、仰慕。", meaningEn: "Observation, perception, and admiration.", fuxiIndex: 48, solarTerm: "八月卦", solarTermEn: "8th Lunar Month" 
  },
  { 
    number: 21, name: "噬嗑", nameEn: "Biting Through", pinyin: "Shì Kè", binary: "101001", upperTrigram: "离", lowerTrigram: "震", 
    judgment: "亨，利用狱。", judgmentEn: "Biting Through has success. It furthers one to let justice be administered.",
    image: "雷电，噬嗑；先王以明罚敕法。", imageEn: "Thunder and lightning: the image of Biting Through. Thus the kings of old made the laws clear and executed the penalties.",
    meaning: "咬合、消除障碍。", meaningEn: "Biting, removing obstacles.", fuxiIndex: 41 
  },
  { 
    number: 22, name: "贲", nameEn: "Grace", pinyin: "Bì", binary: "100101", upperTrigram: "艮", lowerTrigram: "离", 
    judgment: "亨，小利有攸往。", judgmentEn: "Grace has success. In small matters it furthers to undertake something.",
    image: "山下有火，贲；君子以明庶政。", imageEn: "Fire at the foot of the mountain: the image of Grace. Thus the superior man throws light upon the many affairs of the people.",
    meaning: "饰装、文饰、文明。", meaningEn: "Decoration, refinement, and civilization.", fuxiIndex: 37 
  },
  { 
    number: 23, name: "剥", nameEn: "Splitting Apart", pinyin: "Bō", binary: "100000", upperTrigram: "艮", lowerTrigram: "坤", 
    judgment: "不利有攸往。", judgmentEn: "Splitting Apart. It does not further one to go anywhere.",
    image: "山附于地，剥；上以厚下安宅。", imageEn: "The mountain rests on the earth: the image of Splitting Apart. Thus those above can ensure their position only by giving generously to those below.",
    meaning: "剥落、侵蚀、虚弱。", meaningEn: "Splitting, erosion, and weakness.", fuxiIndex: 32, solarTerm: "九月卦", solarTermEn: "9th Lunar Month" 
  },
  { 
    number: 24, name: "复", nameEn: "Return (The Turning Point)", pinyin: "Fù", binary: "000001", upperTrigram: "坤", lowerTrigram: "震", 
    judgment: "亨，出入无疾。", judgmentEn: "Return. Success. Going out and coming in without error. Friends come without blame.",
    image: "地中有雷，复；先王以至日闭关。", imageEn: "Thunder within the earth: the image of the Turning Point. Thus the kings of antiquity closed the passes at the time of solstice.",
    meaning: "循环、回复、生机。", meaningEn: "Cycle, return, and vitality.", fuxiIndex: 1, solarTerm: "十一月卦", solarTermEn: "11th Lunar Month" 
  },
  { 
    number: 25, name: "无妄", nameEn: "Innocence (The Unexpected)", pinyin: "Wú Wàng", binary: "111001", upperTrigram: "乾", lowerTrigram: "震", 
    judgment: "元亨利贞。", judgmentEn: "Innocence. Supreme success. Perseverance furthers. If someone is not as he should be, he has misfortune.",
    image: "天下雷行，物与无妄。", imageEn: "Under heaven thunder rolls: all things attain the natural state of innocence. Thus the kings of old gave help according to the time.",
    meaning: "真实、不妄、意外。", meaningEn: "Reality, truth, and the unexpected.", fuxiIndex: 57 
  },
  { 
    number: 26, name: "大畜", nameEn: "The Taming Power of the Great", pinyin: "Dà Xù", binary: "100111", upperTrigram: "艮", lowerTrigram: "乾", 
    judgment: "利贞，不家食吉。", judgmentEn: "The Taming Power of the Great. Perseverance furthers. Not eating at home brings good fortune.",
    image: "天在山中，大畜；君子以多识前言往行。", imageEn: "Heaven within the mountain: the image of the Taming Power of the Great. Thus the superior man acquaints himself with many sayings of antiquity and many deeds of the past.",
    meaning: "大量蓄积、大有作为。", meaningEn: "Large accumulation, great potential.", fuxiIndex: 39 
  },
  { 
    number: 27, name: "颐", nameEn: "The Corners of the Mouth (Providing Nourishment)", pinyin: "Yí", binary: "100001", upperTrigram: "艮", lowerTrigram: "震", 
    judgment: "贞吉，观颐，自求口实。", judgmentEn: "The Corners of the Mouth. Perseverance brings good fortune. Pay heed to the providing of nourishment.",
    image: "山下有雷，颐；君子以慎言语，节饮食。", imageEn: "At the foot of the mountain, thunder: the image of Providing Nourishment. Thus the superior man is careful of his words and temperate in eating and drinking.",
    meaning: "颐养、口实、养生。", meaningEn: "Nourishment, sustenance, and health.", fuxiIndex: 33 
  },
  { 
    number: 28, name: "大过", nameEn: "Preponderance of the Great", pinyin: "Dà Guò", binary: "011110", upperTrigram: "兑", lowerTrigram: "巽", 
    judgment: "栋桡，利有攸往。", judgmentEn: "Preponderance of the Great. The ridgepole sags to the breaking point. It furthers one to have somewhere to go.",
    image: "泽灭木，大过；君子以独立不惧。", imageEn: "The lake rises above the trees: the image of Preponderance of the Great. Thus the superior man, when he stands alone, is unconcerned.",
    meaning: "过度、非常、危机。", meaningEn: "Excess, unusualness, and crisis.", fuxiIndex: 30 
  },
  { 
    number: 29, name: "坎", nameEn: "The Abysmal (Water)", pinyin: "Kǎn", binary: "010010", upperTrigram: "坎", lowerTrigram: "坎", 
    judgment: "习坎，有孚，维心亨。", judgmentEn: "The Abysmal repeated. If you are sincere, you have success in your heart, and whatever you do succeeds.",
    image: "水洊至，习坎；君子以常德行。", imageEn: "Water flows on uninterruptedly and reaches its goal: the image of the Abysmal repeated. Thus the superior man walks in lasting virtue.",
    meaning: "重重困难、陷阱。", meaningEn: "Successive difficulties, traps.", fuxiIndex: 18 
  },
  { 
    number: 30, name: "离", nameEn: "The Clinging (Fire)", pinyin: "Lí", binary: "101101", upperTrigram: "离", lowerTrigram: "离", 
    judgment: "利贞，亨。", judgmentEn: "The Clinging. Perseverance furthers. It brings success. Care of the cow brings good fortune.",
    image: "明两作，离；大人以继明照于四方。", imageEn: "That which is bright rises twice: the image of Fire. Thus the great man, by perpetuating this brightness, illumines the four quarters of the world.",
    meaning: "光明、附丽、美丽。", meaningEn: "Light, clinging, and beauty.", fuxiIndex: 45 
  },
  { 
    number: 31, name: "咸", nameEn: "Influence (Wooing)", pinyin: "Xián", binary: "011100", upperTrigram: "兑", lowerTrigram: "艮", 
    judgment: "亨，利贞。", judgmentEn: "Influence. Success. Perseverance furthers. To take a maiden to wife brings good fortune.",
    image: "山上有泽，咸；君子以虚受人。", imageEn: "A lake on the mountain: the image of Influence. Thus the superior man encourages people to approach him by his readiness to receive them.",
    meaning: "感应、情感、吸引。", meaningEn: "Induction, emotion, and attraction.", fuxiIndex: 28 
  },
  { 
    number: 32, name: "恒", nameEn: "Duration", pinyin: "Héng", binary: "001110", upperTrigram: "震", lowerTrigram: "巽", 
    judgment: "亨，无咎，利贞。", judgmentEn: "Duration. Success. No blame. Perseverance furthers. It furthers one to have somewhere to go.",
    image: "雷风，恒；君子以立不易方。", imageEn: "Thunder and wind: the image of Duration. Thus the superior man stands firm and does not change his direction.",
    meaning: "持久、恒心、稳定。", meaningEn: "Lasting, constancy, and stability.", fuxiIndex: 14 
  },
  { 
    number: 33, name: "遁", nameEn: "Retreat", pinyin: "Dùn", binary: "111100", upperTrigram: "乾", lowerTrigram: "艮", 
    judgment: "亨，小利贞。", judgmentEn: "Retreat. Success. In what is small, perseverance furthers.",
    image: "天下有山，遁；君子以远小人。", imageEn: "Mountain under heaven: the image of Retreat. Thus the superior man keeps the inferior man at a distance.",
    meaning: "退避、隐居、保存。", meaningEn: "Withdrawal, seclusion, and preservation.", fuxiIndex: 60, solarTerm: "六月卦", solarTermEn: "6th Lunar Month" 
  },
  { 
    number: 34, name: "大壮", nameEn: "The Power of the Great", pinyin: "Dà Zhuàng", binary: "001111", upperTrigram: "震", lowerTrigram: "乾", 
    judgment: "利贞。", judgmentEn: "The Power of the Great. Perseverance furthers.",
    image: "雷在天上，大壮；君子以非礼弗履。", imageEn: "Thunder in heaven above: the image of the Power of the Great. Thus the superior man does not tread upon paths that do not accord with established order.",
    meaning: "壮大、强盛、冲动。", meaningEn: "Expansion, strength, and impulse.", fuxiIndex: 15, solarTerm: "二月卦", solarTermEn: "2nd Lunar Month" 
  },
  { 
    number: 35, name: "晋", nameEn: "Progress", pinyin: "Jìn", binary: "101000", upperTrigram: "离", lowerTrigram: "坤", 
    judgment: "康侯用锡马蕃庶。", judgmentEn: "Progress. The powerful prince is honored with horses in large numbers. In a single day he is granted audience three times.",
    image: "明出地上，晋；君子以自昭明德。", imageEn: "The sun rises over the earth: the image of Progress. Thus the superior man himself brightens his bright virtue.",
    meaning: "晋升、前进、显赫。", meaningEn: "Promotion, forward movement, and fame.", fuxiIndex: 40 
  },
  { 
    number: 36, name: "明夷", nameEn: "Darkening of the Light", pinyin: "Míng Yí", binary: "000101", upperTrigram: "坤", lowerTrigram: "离", 
    judgment: "利艰贞。", judgmentEn: "Darkening of the Light. In adversity it furthers one to be persevering.",
    image: "明入地中，明夷；君子以莅众。", imageEn: "The sun has sunk under the earth: the image of Darkening of the Light. Thus the superior man lives with the great multitude; he veils his light, yet still shines.",
    meaning: "光明受损、艰难。", meaningEn: "Light damaged, difficulty.", fuxiIndex: 5 
  },
  { 
    number: 37, name: "家人", nameEn: "The Family (The Clan)", pinyin: "Jiā Rén", binary: "110101", upperTrigram: "巽", lowerTrigram: "离", 
    judgment: "利女贞。", judgmentEn: "The Family. The perseverance of the woman furthers.",
    image: "风自火出，家人；君子以言有物。", imageEn: "Wind comes forth from fire: the image of the Family. Thus the superior man has substance in his words and manifestation in his way of life.",
    meaning: "家庭、治家、内部。", meaningEn: "Family, governance, and internal.", fuxiIndex: 53 
  },
  { 
    number: 38, name: "睽", nameEn: "Opposition", pinyin: "Kuí", binary: "101011", upperTrigram: "离", lowerTrigram: "兑", 
    judgment: "小事吉。", judgmentEn: "Opposition. In small matters, good fortune.",
    image: "上火下泽，睽；君子以同而异。", imageEn: "Above, fire; below, the lake: the image of Opposition. Thus amid all points of similarity, the superior man retains his individuality.",
    meaning: "乖离、矛盾、异同。", meaningEn: "Deviation, contradiction, and difference.", fuxiIndex: 43 
  },
  { 
    number: 39, name: "蹇", nameEn: "Obstruction", pinyin: "Jiǎn", binary: "010100", upperTrigram: "坎", lowerTrigram: "艮", 
    judgment: "利西南，不利东北。", judgmentEn: "Obstruction. The southwest furthers. The northeast does not further. It furthers one to see the great man. Perseverance brings good fortune.",
    image: "山上有水，蹇；君子以反身修德。", imageEn: "Water on the mountain: the image of Obstruction. Thus the superior man turns his attention to himself and molds his character.",
    meaning: "艰难、跋涉、反省。", meaningEn: "Difficulty, trekking, and introspection.", fuxiIndex: 20 
  },
  { 
    number: 40, name: "解", nameEn: "Deliverance", pinyin: "Xiè", binary: "001010", upperTrigram: "震", lowerTrigram: "坎", 
    judgment: "利西南。", judgmentEn: "Deliverance. The southwest furthers. If there is no longer anything where one has to go, return brings good fortune.",
    image: "雷雨作，解；君子以赦过宥罪。", imageEn: "Thunder and rain set in: the image of Deliverance. Thus the superior man pardons mistakes and forgives misdeeds.",
    meaning: "缓解、解除、赦免。", meaningEn: "Relief, deliverance, and amnesty.", fuxiIndex: 10 
  },
  { 
    number: 41, name: "损", nameEn: "Decrease", pinyin: "Sǔn", binary: "100011", upperTrigram: "艮", lowerTrigram: "兑", 
    judgment: "已事遄往，无咎。", judgmentEn: "Decrease combined with sincerity brings supreme good fortune without blame.",
    image: "山下有泽，损；君子以惩忿窒欲。", imageEn: "At the foot of the mountain, the lake: the image of Decrease. Thus the superior man curbs his anger and restrains his instincts.",
    meaning: "减损、修身、诚意。", meaningEn: "Reduction, self-cultivation, and sincerity.", fuxiIndex: 35 
  },
  { 
    number: 42, name: "益", nameEn: "Increase", pinyin: "Yì", binary: "110001", upperTrigram: "巽", lowerTrigram: "震", 
    judgment: "利用攸往。", judgmentEn: "Increase. It furthers one to undertake something. It furthers one to cross the great water.",
    image: "风雷，益；君子以见善则迁，有过则改。", imageEn: "Wind and thunder: the image of Increase. Thus the superior man: if he sees good, he imitates it; if he has faults, he rids himself of them.",
    meaning: "增益、进步、施予。", meaningEn: "Benefit, progress, and giving.", fuxiIndex: 49 
  },
  { 
    number: 43, name: "夬", nameEn: "Break-through (Resoluteness)", pinyin: "Guài", binary: "011111", upperTrigram: "兑", lowerTrigram: "乾", 
    judgment: "扬于王庭。", judgmentEn: "Break-through. One must resolutely make the matter known at the court of the king. It must be announced truthfully.",
    image: "泽上于天，夬；君子以施禄及下。", imageEn: "The lake has risen up to heaven: the image of Break-through. Thus the superior man dispenses riches to those below.",
    meaning: "决断、清除、果敢。", meaningEn: "Decision, removal, and boldness.", fuxiIndex: 31, solarTerm: "三月卦", solarTermEn: "3rd Lunar Month" 
  },
  { 
    number: 44, name: "姤", nameEn: "Coming to Meet", pinyin: "Gòu", binary: "111110", upperTrigram: "乾", lowerTrigram: "巽", 
    judgment: "女壮，勿用取女。", judgmentEn: "Coming to Meet. The maiden is powerful. One should not marry such a maiden.",
    image: "天下有风，姤；后以施命诰四方。", imageEn: "Under heaven, wind: the image of Coming to Meet. Thus the prince acts when disseminating his commands.",
    meaning: "邂逅、相遇、危机。", meaningEn: "Encounter, meeting, and crisis.", fuxiIndex: 62, solarTerm: "五月卦", solarTermEn: "5th Lunar Month" 
  },
  { 
    number: 45, name: "萃", nameEn: "Gathering Together (Massing)", pinyin: "Cuì", binary: "011000", upperTrigram: "兑", lowerTrigram: "坤", 
    judgment: "亨，王假有庙。", judgmentEn: "Gathering Together. Success. The king approaches his ancestral temple. It furthers one to see the great man.",
    image: "泽上于地，萃；君子以除戎器。", imageEn: "Over the earth, the lake: the image of Gathering Together. Thus the superior man renews his weapons in order to meet the unforeseen.",
    meaning: "聚集、精粹、汇合。", meaningEn: "Aggregation, essence, and merging.", fuxiIndex: 24 
  },
  { 
    number: 46, name: "升", nameEn: "Pushing Upward", pinyin: "Shēng", binary: "000110", upperTrigram: "坤", lowerTrigram: "巽", 
    judgment: "元亨，用见大人。", judgmentEn: "Pushing Upward has supreme success. One must see the great man. Fear not.",
    image: "地中生木，升；君子以顺德。", imageEn: "Within the earth, wood grows: the image of Pushing Upward. Thus the superior man in his devotion accumulates small things in order to achieve something high and great.",
    meaning: "上升、晋升、积聚。", meaningEn: "Rise, promotion, and accumulation.", fuxiIndex: 6 
  },
  { 
    number: 47, name: "困", nameEn: "Oppression (Exhaustion)", pinyin: "Kùn", binary: "011010", upperTrigram: "兑", lowerTrigram: "坎", 
    judgment: "亨，贞，大人吉。", judgmentEn: "Oppression. Success. Perseverance. The great man brings about good fortune. No blame.",
    image: "泽无水，困；君子以致命遂志。", imageEn: "There is no water in the lake: the image of Exhaustion. Thus the superior man stakes his life on following his will.",
    meaning: "困顿、穷途、磨砺。", meaningEn: "Straits, deadlock, and tempering.", fuxiIndex: 26 
  },
  { 
    number: 48, name: "井", nameEn: "The Well", pinyin: "Jǐng", binary: "010110", upperTrigram: "坎", lowerTrigram: "巽", 
    judgment: "改邑不改井。", judgmentEn: "The Well. The town may be changed, but the well cannot be changed. It neither decreases nor increases.",
    image: "木上有水，井；君子以劳民劝相。", imageEn: "Water over wood: the image of the Well. Thus the superior man encourages the people at their work and exhorts them to help one another.",
    meaning: "源泉、供养、安定。", meaningEn: "Source, sustenance, and stability.", fuxiIndex: 22 
  },
  { 
    number: 49, name: "革", nameEn: "Revolution (Molting)", pinyin: "Gé", binary: "011101", upperTrigram: "兑", lowerTrigram: "离", 
    judgment: "己日乃孚。", judgmentEn: "Revolution. On your own day you are believed. Supreme success. Furthering through perseverance.",
    image: "泽中有火，革；君子以治历明时。", imageEn: "Fire in the lake: the image of Revolution. Thus the superior man sets the calendar in order and makes the seasons clear.",
    meaning: "变革、更新、革命。", meaningEn: "Reform, innovation, and revolution.", fuxiIndex: 29 
  },
  { 
    number: 50, name: "鼎", nameEn: "The Caldron", pinyin: "Dǐng", binary: "101110", upperTrigram: "离", lowerTrigram: "巽", 
    judgment: "元吉，亨。", judgmentEn: "The Caldron. Supreme good fortune. Success.",
    image: "火上有木，鼎；君子以正位凝命。", imageEn: "Fire over wood: the image of the Caldron. Thus the superior man consolidates his fate by making his position correct.",
    meaning: "鼎新、重任、稳重。", meaningEn: "Innovation, duty, and steadiness.", fuxiIndex: 46 
  },
  { 
    number: 51, name: "震", nameEn: "The Arousing (Shock, Thunder)", pinyin: "Zhèn", binary: "001001", upperTrigram: "震", lowerTrigram: "震", 
    judgment: "亨，震来虩虩。", judgmentEn: "The Arousing brings success. Shock comes - oh, oh! Laughing words - ha, ha! The shock terrifies for a hundred miles.",
    image: "洊雷，震；君子以恐惧修省。", imageEn: "Thunder repeated: the image of the Arousing. Thus the superior man, in fear and trembling, sets his life in order and examines himself.",
    meaning: "雷动、惊觉、警醒。", meaningEn: "Thunder, awakening, and alertness.", fuxiIndex: 9 
  },
  { 
    number: 52, name: "艮", nameEn: "Keeping Still (Mountain)", pinyin: "Gèn", binary: "100100", upperTrigram: "艮", lowerTrigram: "艮", 
    judgment: "艮其背，不获其身。", judgmentEn: "Keeping Still. Keeping his back still so that he no longer feels his body. He goes into his courtyard and does not see his people. No blame.",
    image: "兼山，艮；君子以思不出其位。", imageEn: "Mountains standing close together: the image of Keeping Still. Thus the superior man does not let his thoughts go beyond his situation.",
    meaning: "停止、定力、稳重。", meaningEn: "Stopping, concentration, and steadiness.", fuxiIndex: 36 
  },
  { 
    number: 53, name: "渐", nameEn: "Development (Gradual Progress)", pinyin: "Jiàn", binary: "110100", upperTrigram: "巽", lowerTrigram: "艮", 
    judgment: "女归吉，利贞。", judgmentEn: "Development. The maiden is given in marriage. Good fortune. Perseverance furthers.",
    image: "山上有木，渐；君子以居贤德善俗。", imageEn: "A tree on the mountain: the image of Development. Thus the superior man abides in dignity and virtue in order to improve the customs.",
    meaning: "渐进、稳步、发展。", meaningEn: "Gradual progress, steady growth.", fuxiIndex: 52 
  },
  { 
    number: 54, name: "归妹", nameEn: "The Marrying Maiden", pinyin: "Guī Mèi", binary: "001011", upperTrigram: "震", lowerTrigram: "兑", 
    judgment: "征凶，无攸利。", judgmentEn: "The Marrying Maiden. Undertakings bring misfortune. Nothing that would further.",
    image: "泽上有雷，归妹；君子以永终知敝。", imageEn: "Thunder over the lake: the image of the Marrying Maiden. Thus the superior man understands the transitory in the light of the eternity of the end.",
    meaning: "婚嫁、归宿、终局。", meaningEn: "Marriage, destination, and conclusion.", fuxiIndex: 11 
  },
  { 
    number: 55, name: "丰", nameEn: "Abundance (Fullness)", pinyin: "Fēng", binary: "001101", upperTrigram: "震", lowerTrigram: "离", 
    judgment: "亨，王假之。", judgmentEn: "Abundance has success. The king attains abundance. Be not sad. Be like the sun at midday.",
    image: "雷火至，丰；君子以折狱致刑。", imageEn: "Both thunder and lightning come: the image of Abundance. Thus the superior man decides lawsuits and carries out punishments.",
    meaning: "丰盛、盛大、巅峰。", meaningEn: "Abundance, greatness, and peak.", fuxiIndex: 13 
  },
  { 
    number: 56, name: "旅", nameEn: "The Wanderer", pinyin: "Lǚ", binary: "101100", upperTrigram: "离", lowerTrigram: "艮", 
    judgment: "小亨，旅贞吉。", judgmentEn: "The Wanderer. Success through smallness. Perseverance brings good fortune to the wanderer.",
    image: "山上有火，旅；君子以明慎用刑。", imageEn: "Fire on the mountain: the image of the Wanderer. Thus the superior man is clear-sighted and cautious in imposing punishments.",
    meaning: "客旅、漂泊、变动。", meaningEn: "Wanderer, drifting, and change.", fuxiIndex: 44 
  },
  { 
    number: 57, name: "巽", nameEn: "The Gentle (The Penetrating, Wind)", pinyin: "Xùn", binary: "110110", upperTrigram: "巽", lowerTrigram: "巽", 
    judgment: "小亨，利攸往。", judgmentEn: "The Gentle. Success through what is small. It furthers one to have somewhere to go. It furthers one to see the great man.",
    image: "随风，巽；君子以申命行事。", imageEn: "Winds following one upon the other: the image of the Gently Penetrating. Thus the superior man spreads his commands abroad and carries out his undertakings.",
    meaning: "顺服、进入、谦逊。", meaningEn: "Submission, entry, and humility.", fuxiIndex: 54 
  },
  { 
    number: 58, name: "兑", nameEn: "The Joyous (Lake)", pinyin: "Duì", binary: "011011", upperTrigram: "兑", lowerTrigram: "兑", 
    judgment: "亨，利贞。", judgmentEn: "The Joyous. Success. Perseverance furthers.",
    image: "丽泽，兑；君子以朋友讲习。", imageEn: "Lakes resting one on the other: the image of the Joyous. Thus the superior man joins with his friends for discussion and practice.",
    meaning: "喜悦、交流、说服。", meaningEn: "Joy, communication, and persuasion.", fuxiIndex: 27 
  },
  { 
    number: 59, name: "涣", nameEn: "Dispersion (Dissolution)", pinyin: "Huàn", binary: "110010", upperTrigram: "巽", lowerTrigram: "坎", 
    judgment: "亨，王假有庙。", judgmentEn: "Dispersion. Success. The king approaches his ancestral temple. It furthers one to cross the great water. Perseverance furthers.",
    image: "风行水上，涣；先王以享于帝立庙。", imageEn: "The wind drives over the water: the image of Dispersion. Thus the kings of old sacrificed to the Lord and built temples.",
    meaning: "涣散、化解、传播。", meaningEn: "Dissipation, dissolution, and dissemination.", fuxiIndex: 50 
  },
  { 
    number: 60, name: "节", nameEn: "Limitation", pinyin: "Jié", binary: "010011", upperTrigram: "坎", lowerTrigram: "兑", 
    judgment: "亨，苦节不可贞。", judgmentEn: "Limitation. Success. Galling limitation must not be persevered in.",
    image: "泽上有水，节；君子以制数度。", imageEn: "Water over the lake: the image of Limitation. Thus the superior man creates number and measure, and examines the nature of virtue and correct conduct.",
    meaning: "节制、适度、法度。", meaningEn: "Constraint, moderation, and law.", fuxiIndex: 19 
  },
  { 
    number: 61, name: "中孚", nameEn: "Inner Truth", pinyin: "Zhōng Fú", binary: "110011", upperTrigram: "巽", lowerTrigram: "兑", 
    judgment: "豚鱼吉，利涉大川。", judgmentEn: "Inner Truth. Pigs and fishes. Good fortune. It furthers one to cross the great water. Perseverance furthers.",
    image: "泽上有风，中孚；君子以议狱缓死。", imageEn: "Wind over the lake: the image of Inner Truth. Thus the superior man discusses judicial cases in order to delay executions.",
    meaning: "诚信、感化、中心。", meaningEn: "Honesty, influence, and center.", fuxiIndex: 51 
  },
  { 
    number: 62, name: "小过", nameEn: "Preponderance of the Small", pinyin: "Xiǎo Guò", binary: "001100", upperTrigram: "震", lowerTrigram: "艮", 
    judgment: "亨，利贞，可小事。", judgmentEn: "Preponderance of the Small. Success. Perseverance furthers. Small things may be done; great things should not be done.",
    image: "山上有雷，小过；君子以行过乎恭。", imageEn: "Thunder on the mountain: the image of Preponderance of the Small. Thus the superior man in his conduct is over-conscientious.",
    meaning: "小有过错、慎重、细小。", meaningEn: "Small error, caution, and minor.", fuxiIndex: 12 
  },
  { 
    number: 63, name: "既济", nameEn: "After Completion", pinyin: "Jì Jì", binary: "010101", upperTrigram: "坎", lowerTrigram: "离", 
    judgment: "亨小，利贞。", judgmentEn: "After Completion. Success in small matters. Perseverance furthers. At the beginning good fortune, at the end disorder.",
    image: "水在火上，既济；君子以思患预防之。", imageEn: "Water over fire: the image of the condition After Completion. Thus the superior man takes thought of misfortune and arms himself against it in advance.",
    meaning: "成功、完成、圆满。", meaningEn: "Success, completion, and perfection.", fuxiIndex: 21 
  },
  { 
    number: 64, name: "未济", nameEn: "Before Completion", pinyin: "Wèi Jì", binary: "101010", upperTrigram: "离", lowerTrigram: "坎", 
    judgment: "亨，小狐汔济。", judgmentEn: "Before Completion. Success. But if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further.",
    image: "火在水上，未济；君子以慎辨物居方。", imageEn: "Fire over water: the image of the condition Before Completion. Thus the superior man is careful in the differentiation of things, so that each finds its place.",
    meaning: "尚未完成、希望、无穷。", meaningEn: "Not yet completed, hope, and infinity.", fuxiIndex: 42 
  },
];
