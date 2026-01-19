
import { Language } from '../types';

export interface MasterInterpretation {
  fortune: string;    // 整体运势
  career: string;     // 事业指导
  philosophy: string; // 处世哲学
  fortuneEn: string;
  careerEn: string;
  philosophyEn: string;
}

export const MASTER_INTERPRETATIONS: Record<number, MasterInterpretation> = {
  1: {
    fortune: "大吉大利。处于极度上升期，各方面都呈现出生机勃勃的景象，但需防盛极而衰。",
    career: "如日中天，适合大开大合，担当重任。需注意“亢龙有悔”，在巅峰时刻保持警惕。",
    philosophy: "自强不息。像天一样运行不息，不断提升自己的德行与能力，方能长久。",
    fortuneEn: "Great prosperity. You are in a period of extreme ascent, with vitality in all aspects, but beware of the decline after the peak.",
    careerEn: "At the peak of your career, suitable for taking on great responsibilities. Be mindful of 'the dragon reaching its limits', staying vigilant at the summit.",
    philosophyEn: "Self-strengthening. Like the heavens in constant motion, continuously improve your virtue and ability to ensure longevity."
  },
  2: {
    fortune: "平稳顺遂。不宜采取主动，应以顺应大势、厚积薄发为主。",
    career: "适合辅助角色或幕后策划。通过包容与耐力获得支持，切忌急功近利。",
    philosophy: "厚德载物。像大地一样承载万物，柔顺、低调才是真正的力量所在。",
    fortuneEn: "Steady and smooth. Avoid taking the initiative; focus on following the trend and accumulating strength quietly.",
    careerEn: "Suitable for supporting roles or behind-the-scenes planning. Gain support through tolerance and endurance. Avoid quick success.",
    philosophyEn: "Nurturing with great virtue. Carry all things like the earth; gentleness and a low profile are where true power lies."
  },
  3: {
    fortune: "初时艰辛，前景光明。正处于万事起头的艰难期，需要极大的耐心。",
    career: "草创初期，阻力重重。不要盲目冒进，适合建立初步架构，寻找可靠合伙人。",
    philosophy: "经纶天下。在混乱中理清头绪，坚持信念，等待冰雪消融的时刻。",
    fortuneEn: "Hardship at first, bright future. In a difficult starting phase, requiring great patience.",
    careerEn: "Early stages of creation with many obstacles. Avoid blind aggression. Suitable for building frameworks and finding reliable partners.",
    philosophyEn: "Ordering the world. Sort through chaos, hold onto your beliefs, and wait for the ice to melt."
  },
  4: {
    fortune: "波动不定。处于困惑与学习期，需要明师指引，切忌自作聪明。",
    career: "适合进修与内部整顿。作为领导应启发下属，作为执行者应虚心求教。",
    philosophy: "果行育德。通过不断的实践和学习来开启智慧，保持一颗虚怀若谷的心。",
    fortuneEn: "Unstable and fluctuating. In a period of confusion and learning, requiring guidance. Avoid being self-righteous.",
    careerEn: "Suitable for further studies and internal restructuring. Leaders should inspire subordinates; practitioners should seek advice humbly.",
    philosophyEn: "Cultivating virtue through action. Open wisdom through constant practice and learning, maintaining a humble heart."
  },
  5: {
    fortune: "等待时机。虽然目前看似停滞，但其实是蓄势待发，不必焦躁。",
    career: "不宜强求突破，应在等待中磨练技能。保持身心愉悦，静待风云变幻。",
    philosophy: "守正待时。明白“欲速则不达”，在时机未成熟时，积蓄力量也是一种进取。",
    fortuneEn: "Waiting for the moment. Though seemingly stagnant, you are gathering momentum. Do not be anxious.",
    careerEn: "Do not force breakthroughs; refine skills while waiting. Maintain inner joy and watch for changes in the situation.",
    philosophyEn: "Awaiting time with rectitude. Understand that 'haste makes waste'. Accumulating strength when the time is not yet ripe is also progress."
  },
  6: {
    fortune: "多生是非。容易与人发生争执，若能及时收手，则能化险为夷。",
    career: "合作中容易产生分歧，凡事应事先约定明确，避免中途生变。以和为贵。",
    philosophy: "作事谋始。争端往往源于初始的模糊，慎重开启每一件事是避免争讼的关键。",
    fortuneEn: "Full of disputes. Conflicts with others are likely. If you can stop in time, you can turn danger into safety.",
    careerEn: "Disagreements are likely in cooperation. Agreements should be clear beforehand. Value harmony above all.",
    philosophyEn: "Considering the beginning. Disputes often stem from initial ambiguity. Careful planning at the start is the key to avoiding conflict."
  },
  7: {
    fortune: "组织严整。虽然环境严峻，但若能团结一致，必能克服重重困难。",
    career: "需要极强的领导力与纪律性。统帅应有刚中之德，容纳大众，方能取胜。",
    philosophy: "容民畜众。真正的领导力源于群众的拥护，严明的纪律与博大的胸怀缺一不可。",
    fortuneEn: "Disciplined organization. Though the environment is harsh, unity will overcome all difficulties.",
    careerEn: "Requires strong leadership and discipline. Leaders should have strong virtue and accommodate the masses to win.",
    philosophyEn: "Accommodating the people. True leadership comes from the support of the masses; both strict discipline and a broad mind are essential."
  },
  8: {
    fortune: "亲近吉祥。适合社交与合作，寻找志同道合的伙伴，能获得助力。",
    career: "团队协作的黄金期。应主动建立联结，确立自己的核心地位或寻找强大的依靠。",
    philosophy: "比辅之道。人与人之间的联结应建立在诚信的基础上，迟疑不决会错失良机。",
    fortuneEn: "Intimacy and good fortune. Suitable for socializing and cooperation. Find like-minded partners for support.",
    careerEn: "A golden age for teamwork. Proactively build connections, establish your core position, or find a strong reliance.",
    philosophyEn: "The way of holding together. Human connections should be based on integrity. Hesitation will lead to missed opportunities."
  },
  // Adding more localized summaries for a few more to demonstrate
  11: {
    fortune: "吉亨安泰。阴阳交合，上下和谐，是事业与生活的全盛时期。",
    career: "沟通顺畅，合作无间。应抓住机遇扩大成果，同时要预防“盛极必衰”的苗头。",
    philosophy: "裁成辅相。在繁荣时期更应理清规则，辅助万物各得其位，维持平衡。",
    fortuneEn: "Peace and prosperity. Harmony between high and low, a peak period for both career and life.",
    careerEn: "Smooth communication and seamless cooperation. Seize opportunities to expand, but watch for signs of decline at the peak.",
    philosophyEn: "Ordering and supporting. In times of prosperity, refine rules and help everything find its place to maintain balance."
  },
  12: {
    fortune: "闭塞不通。沟通受阻，小人当道，君子应退隐避难，不宜出头。",
    career: "阻力极大，计划难以推行。此时应守住底线，不随波逐流，保护好核心力量。",
    philosophy: "俭德辟难。在逆境中通过克制欲望、节约能量来度过难关，等待转机。",
    fortuneEn: "Stagnation and blockage. Communication is hindered. The wise should withdraw to avoid difficulty and not stand out.",
    careerEn: "Great resistance, plans are hard to implement. Hold your ground, do not drift with the tide, and protect your core strength.",
    philosophyEn: "Escaping difficulty through frugality. Overcome hardships in adversity by restraining desires and saving energy, waiting for a turn."
  },
  63: {
    fortune: "既成圆满。事情已经完成。初吉终乱。必须时刻保持警惕，防止盛极而衰。",
    career: "项目圆满交付。应立即开始预防性维护，不要掉以轻心。预防由于松懈导致的事故。",
    philosophy: "思患预防之。最危险的时刻就是大功告成之时。保持如临深渊的心态，维持动态平衡。",
    fortuneEn: "Completion and perfection. Things are finished. Success at first, but disorder at the end. Stay vigilant to prevent decline.",
    careerEn: "Project completed successfully. Start preventive maintenance immediately; do not lower your guard. Prevent accidents caused by laxity.",
    philosophyEn: "Thinking of danger to prevent it. The most dangerous moment is when success is achieved. Maintain a cautious mindset for balance."
  },
  64: {
    fortune: "未济希望。处于黎明前的黑暗，或者新循环的开始。虽然艰辛，但充满无限可能。",
    career: "事业进入重组或新阶段。应像“小狐过河”般谨慎，在最后一刻稳住，不要前功尽弃。",
    philosophy: "慎辨物居方。在变化的末尾洞察规律。一切终点都是起点，永远保持进取与敬畏。",
    fortuneEn: "Hope before completion. In the darkness before dawn or the start of a new cycle. Hardship exists, but possibilities are infinite.",
    careerEn: "Career entering a reorganization or new phase. Be as cautious as a 'little fox crossing a river', staying steady at the final moment.",
    philosophyEn: "Differentiating things carefully. Observe patterns at the end of change. Every end is a beginning; maintain progress and awe."
  }
};

/**
 * 获取默认解读的辅助函数
 */
export const getStaticInterpretation = (num: number, lang: Language = 'zh'): string => {
  const data = MASTER_INTERPRETATIONS[num];
  const isEn = lang === 'en';
  if (!data) return isEn ? "Classical wisdom is accumulating. Please check the hexagram text." : "经典智慧积累中，请查阅卦辞。";
  
  if (isEn) {
    return `[General Fortune]\n${data.fortuneEn || data.fortune}\n\n[Career Advice]\n${data.careerEn || data.career}\n\n[Life Philosophy]\n${data.philosophyEn || data.philosophy}`;
  }
  
  return `【整体运势】\n${data.fortune}\n\n【事业指导】\n${data.career}\n\n【处世哲学】\n${data.philosophy}`;
};
