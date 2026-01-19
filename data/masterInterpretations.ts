
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
    fortune: "大吉大利。处于极度上升期，呈现出生机勃勃之象，但需防盛极而衰。",
    career: "如日中天，适合担当重任。需注意“亢龙有悔”，在巅峰时刻保持警惕。",
    philosophy: "自强不息。像天一样运行不息，提升德行，方能长久。",
    fortuneEn: "Great prosperity. You are in a period of ascent. Beware of decline after the peak.",
    careerEn: "At your peak, suitable for great tasks. Stay vigilant at the summit.",
    philosophyEn: "Self-strengthening. Like heaven in motion, improve your virtue for longevity."
  },
  2: {
    fortune: "平稳顺遂。不宜采取主动，应以顺应大势、厚积薄发为主。",
    career: "适合辅助角色。通过包容与耐力获得支持，切忌急功近利。",
    philosophy: "厚德载物。柔顺、低调才是真正的力量所在。",
    fortuneEn: "Steady and smooth. Avoid taking initiative; follow the trend and accumulate strength.",
    careerEn: "Suitable for supporting roles. Gain support through endurance. Avoid haste.",
    philosophyEn: "Nurturing with virtue. Gentleness and a low profile are true power."
  },
  3: {
    fortune: "初时艰辛，前景光明。处于万事起头的艰难期，需要极大的耐心。",
    career: "草创初期，阻力重重。建立初步架构，寻找可靠合伙人。",
    philosophy: "经纶天下。在混乱中理清头绪，坚持信念，等待时机。",
    fortuneEn: "Early hardship, bright future. A difficult starting phase requiring patience.",
    careerEn: "Creative resistance. Build frameworks and find reliable partners.",
    philosophyEn: "Ordering the world. Sort through chaos and wait for the right time."
  },
  4: {
    fortune: "波动不定。处于困惑与学习期，需要明师指引。",
    career: "适合进修与整顿。领导应启发下属，执行者应虚心求教。",
    philosophy: "果行育德。通过实践开启智慧，保持虚怀若谷的心。",
    fortuneEn: "Unstable. A period of confusion and learning needing guidance.",
    careerEn: "Suitable for further studies. Leaders should inspire; practitioners should learn.",
    philosophyEn: "Cultivating virtue. Open wisdom through practice and humility."
  },
  5: {
    fortune: "等待时机。目前看似停滞，实则蓄势待发，不必焦躁。",
    career: "不宜强求突破。保持身心愉悦，静待风云变幻。",
    philosophy: "守正待时。积蓄力量也是一种进取。",
    fortuneEn: "Waiting for the moment. Gathering momentum; do not be anxious.",
    careerEn: "Refine skills while waiting. Maintain joy and watch for changes.",
    philosophyEn: "Awaiting time with rectitude. Accumulating strength is also progress."
  },
  6: {
    fortune: "多生是非。容易发生争执，若能及时收手则能化险为夷。",
    career: "合作易生分歧。事先约定明确，以和为贵。",
    philosophy: "作事谋始。慎重开启每一件事是避免争讼的关键。",
    fortuneEn: "Disputes likely. Conflicts may arise. Stop in time to stay safe.",
    careerEn: "Friction in cooperation. Agreements should be clear; value harmony.",
    philosophyEn: "Considering the start. Careful planning avoids legal conflicts."
  },
  7: {
    fortune: "组织严整。虽然环境严峻，团结一致必能克服困难。",
    career: "需要强领导力。统帅应有刚中之德，容纳大众。",
    philosophy: "容民畜众。严明的纪律与博大的胸怀缺一不可。",
    fortuneEn: "Disciplined organization. Unity will overcome harsh environments.",
    careerEn: "Requires strong leadership. Leaders should accommodate the masses.",
    philosophyEn: "Accommodating people. Both discipline and a broad mind are essential."
  },
  8: {
    fortune: "亲近吉祥。适合社交与合作，寻找志趣相投的伙伴。",
    career: "团队协作黄金期。建立联结，确立自己的核心地位。",
    philosophy: "比辅之道。人际联结应建立在诚信基础上。",
    fortuneEn: "Intimacy and fortune. Suitable for socializing and finding partners.",
    careerEn: "Golden age for teamwork. Build connections and establish a core role.",
    philosophyEn: "The way of holding together. Human connections rely on integrity."
  },
  9: {
    fortune: "小有成就。力量微弱，目前仅能进行局部的、细小的改动。",
    career: "不宜大举进攻。通过细节的修缮和诚恳的态度积累信誉。",
    philosophy: "懿文德。完善内在的文化修养，以德服人而非以力制人。",
    fortuneEn: "Small success. Weak strength allows only minor or local changes.",
    careerEn: "Avoid major attacks. Accumulate credit through detail and sincerity.",
    philosophyEn: "Refining virtue. Improve inner culture to win hearts, not force."
  },
  10: {
    fortune: "险中有序。伴随风险，但若遵循礼法规则，可平安度过。",
    career: "如履薄冰。处理棘手公关或高难度项目时，需极度谨慎和懂礼。",
    philosophy: "辨上下，定民志。明白位阶与规矩，行止有度则无灾。",
    fortuneEn: "Order in danger. Risk exists, but following rules leads to safety.",
    careerEn: "Walking on thin ice. Handle tough projects with extreme caution.",
    philosophyEn: "Differentiating rank. Knowing rules and boundaries prevents disaster."
  },
  11: {
    fortune: "吉亨安泰。阴阳交感，是事业与生活的全盛时期。",
    career: "沟通顺畅。抓住机遇扩大成果，注意预防衰败的苗头。",
    philosophy: "裁成辅相。在繁荣期理清规则，维持动态平衡。",
    fortuneEn: "Peace and prosperity. Harmony exists; a peak for career and life.",
    careerEn: "Smooth communication. Expand results and watch for decline signs.",
    philosophyEn: "Ordering and supporting. In prosperity, refine rules for balance."
  },
  12: {
    fortune: "闭塞不通。小人当道，君子应退隐避难，不宜出头。",
    career: "阻力极大，计划受挫。守住底线，保护好核心力量。",
    philosophy: "俭德辟难。逆境中克制欲望，等待转机。",
    fortuneEn: "Stagnation. Hindered communication. Withdraw to avoid difficulty.",
    careerEn: "Great resistance. Protect core strength and hold your ground.",
    philosophyEn: "Frugality in hardship. Restrain desires and wait for a turn."
  },
  13: {
    fortune: "志同道合。适合广结善缘，建立广泛的合作网络。",
    career: "大同之象。破除隔阂，与团队甚至竞争对手寻找共赢点。",
    philosophy: "类族辨物。求大同存小异，寻找真正的契合点。",
    fortuneEn: "Like-mindedness. Suitable for networking and broad cooperation.",
    careerEn: "Great harmony. Break barriers and find win-win solutions.",
    philosophyEn: "Classifying things. Seek common ground while respecting differences."
  },
  14: {
    fortune: "富有兴旺。拥有巨大的资源和能量，应善加引导。",
    career: "资源丰厚，受人瞩目。应居安思危，用财富和权力去造福社会。",
    philosophy: "遏恶扬善。光明磊落，顺应天道，维持正义。",
    fortuneEn: "Great possession. Rich resources and energy should be guided well.",
    careerEn: "Abundant resources. Use wealth and power to benefit society.",
    philosophyEn: "Curbing evil, furthering good. Be upright and follow natural laws."
  },
  15: {
    fortune: "谦和受益。低调行事能获得持久的支持和成功。",
    career: "功成不居。这种态度反而会让你赢得更多尊重和更大的权限。",
    philosophy: "裒多益寡。天道亏盈而益谦。保持空杯心态。",
    fortuneEn: "Modesty benefits. A low profile gains lasting support and success.",
    careerEn: "Don't claim all credit. This attitude wins more respect and power.",
    philosophyEn: "Reducing the excess. Heaven rewards the humble. Stay open-minded."
  },
  16: {
    fortune: "欢快愉悦。目前氛围轻松，适合开展文娱活动或激发创意。",
    career: "振奋人心。适合启动宣传攻势或激励团队。需防乐极生悲。",
    philosophy: "作乐崇德。将快乐与道德修养结合，不沉溺于感官享受。",
    fortuneEn: "Enthusiasm. Relaxed atmosphere, good for creative activities.",
    careerEn: "Inspiring. Good for launching campaigns or motivating teams.",
    philosophyEn: "Making music for virtue. Combine joy with character building."
  },
  17: {
    fortune: "随机应变。顺应时势，不要固执己见，随大势而动可获吉。",
    career: "市场导向。根据反馈快速调整方案，比坚持初衷更有效。",
    philosophy: "向晦入宴息。懂得进退，在该休息时彻底放松。",
    fortuneEn: "Following. Adapt to circumstances; don't be stubborn for success.",
    careerEn: "Market-oriented. Adjust based on feedback rather than ego.",
    philosophyEn: "Resting at nightfall. Know when to advance and when to rest."
  },
  18: {
    fortune: "整治革新。内部出现问题（如腐败或停滞），正是纠正的好时机。",
    career: "拨乱反正。处理遗留问题，进行大刀阔斧的改革。",
    philosophy: "振民育德。正视错误，通过制度建设和修德来重振活力。",
    fortuneEn: "Repairing decay. Internal issues exist; it's time to fix them.",
    careerEn: "Correcting wrongs. Handle legacy issues with bold reforms.",
    philosophyEn: "Stirring people. Face errors and rebuild through better rules."
  },
  19: {
    fortune: "蒸蒸日上。力量正在壮大，适合主动出击。但需警惕八月之凶（变数）。",
    career: "亲临指导。亲自参与项目，关注细节，建立稳固的基础。",
    philosophy: "教思无穷。以长远的眼光关怀他人，教化人心。",
    fortuneEn: "Approach. Strength is growing; take initiative. Beware of future shifts.",
    careerEn: "Hands-on guidance. Participate personally and build firm bases.",
    philosophyEn: "Inexhaustible teaching. Care for others with a long-term vision."
  },
  20: {
    fortune: "观察感悟。不宜盲目行动，应通过观察他人或自省来寻找答案。",
    career: "市场调研或自我评估期。你的行为正在被他人关注，需注意形象。",
    philosophy: "省方观民。以宏观的视野看待局势，以微观的洞察理解人心。",
    fortuneEn: "Contemplation. Don't act blindly; observe others and self for answers.",
    careerEn: "Assessment period. People are watching you; maintain your image.",
    philosophyEn: "Visiting regions. View the big picture and understand hearts."
  },
  21: {
    fortune: "果断消除。遇到了顽固的阻碍，必须使用强力手段才能解决。",
    career: "执行纪律。处理害群之马或攻克核心难关，不宜手软。",
    philosophy: "明罚敕法。正义需要霹雳手段，明确底线。咬合障碍方能通达。",
    fortuneEn: "Biting through. Persistent obstacles require strong, decisive action.",
    careerEn: "Enforcing discipline. Handle bad actors or core hurdles firmly.",
    philosophyEn: "Clarifying laws. Justice needs firm methods. Bite the block to pass."
  },
  22: {
    fortune: "小有装点。注重外在形象和礼仪，但不可华而不实。",
    career: "公关与品牌包装期。适合提升办公环境或个人形象，但核心业务不能虚。",
    philosophy: "明庶政，无敢折狱。外在修饰应辅助内在，而非替代内在。",
    fortuneEn: "Grace. Focus on image and etiquette, but don't be superficial.",
    careerEn: "Branding phase. Improve your environment, but keep core business solid.",
    philosophyEn: "Refining affairs. Appearance should support inner worth, not replace it."
  },
  23: {
    fortune: "剥落受损。阴气盛，正气消。目前不宜有任何大的作为，守旧为宜。",
    career: "裁员、缩减或声誉受损。此时应韬光养晦，不要在这个时候反抗趋势。",
    philosophy: "厚下安宅。通过对基层的关怀和厚道的为人来保全自己。",
    fortuneEn: "Splitting apart. Negative forces prevail. Avoid major actions.",
    careerEn: "Downsizing or damage. Keep a low profile and don't fight the trend.",
    philosophyEn: "Ensuring the base. Secure yourself by caring for those below."
  },
  24: {
    fortune: "生机重现。最黑暗的时期已经过去，一点点积极的变化正在发生。",
    career: "触底反弹。新的机会、新的动力正在酝酿，虽然微弱但极具潜力。",
    philosophy: "七日来复。循环往复是自然规律。在独处中静养，等待力量恢复。",
    fortuneEn: "Return. The darkest period is over; positive change is beginning.",
    careerEn: "Bottoming out. New opportunities are brewing; weak but potent.",
    philosophyEn: "Turning point. Cycles are natural. Rest in solitude for recovery."
  },
  25: {
    fortune: "顺其自然。保持赤子之心，不要有任何投机取巧的念头。",
    career: "无心插柳。按本分做事，反而会有意外的收获。若心怀鬼胎必遭灾。",
    philosophy: "天下雷行，物与无妄。顺应天命，保持纯粹的动机。",
    fortuneEn: "Innocence. Be natural; avoid speculation or tricky thoughts.",
    careerEn: "Unexpected gain. Doing your duty brings results. Deceit leads to disaster.",
    philosophyEn: "Thunder under heaven. Align with destiny and keep motives pure."
  },
  26: {
    fortune: "大有积蓄。无论是财富、知识还是人才，都已经到了厚积薄发的时刻。",
    career: "担当重任。你的能力已经足够应对大型挑战，适合开拓国际市场或跨领域。",
    philosophy: "多识前言往行。博古通今，用历史的智慧来指导当前的实践。",
    fortuneEn: "Great Taming. Wealth, knowledge, or talent is ready to be released.",
    careerEn: "Taking responsibility. Your ability matches big challenges. Expand now.",
    philosophyEn: "Knowing the past. Use historical wisdom to guide current practice."
  },
  27: {
    fortune: "颐养之道。关注身心健康，以及如何供养自己和他人。",
    career: "关注民生或后勤。此时的重点在于资源分配和维持生态，而非扩张。",
    philosophy: "慎言语，节饮食。言语和饮食是祸福之门，控制欲望是修行的开始。",
    fortuneEn: "Nourishment. Focus on health and how you sustain self and others.",
    careerEn: "Focus on logistics. Priority is resource allocation, not expansion.",
    philosophyEn: "Careful words, temperate food. Control desires for a better life."
  },
  28: {
    fortune: "重压危机。处于超负荷状态，随时可能崩溃，必须寻求紧急突破。",
    career: "背水一战。项目面临崩盘或变革关键期。需要非凡的勇气和孤注一掷的决心。",
    philosophy: "独立不惧，遁世无闷。即便在极端的孤独和压力下，也要守住脊梁。",
    fortuneEn: "Preponderance of Great. Overloaded state; seek emergency breakthroughs.",
    careerEn: "Last stand. Projects face crisis. Need extraordinary courage and resolve.",
    philosophyEn: "Standing alone without fear. Hold your ground even under extreme pressure."
  },
  29: {
    fortune: "险阻重重。陷入了接二连三的困难中。唯有保持诚信与定力方能脱困。",
    career: "遭遇瓶颈。虽然外部环境恶劣，但这是锻炼内功、打磨意志的最佳时机。",
    philosophy: "常德行，习教事。在危险中通过不断的练习和坚守原则来走出困局。",
    fortuneEn: "The Abysmal. Trapped in successive difficulties. Stay sincere and calm.",
    careerEn: "Encountering bottlenecks. Best time to refine skills and will power.",
    philosophyEn: "Lasting virtue. Use constant practice and principles to escape danger."
  },
  30: {
    fortune: "光明附丽。前途灿烂，但必须找到正确的依托才能持久发挥光热。",
    career: "事业高峰。品牌和形象极佳。适合宣传推广，寻求强有力的平台或合作。",
    philosophy: "继明照于四方。光明在于传承，在于柔顺地依附于真理。",
    fortuneEn: "The Clinging. Bright future, but you must rely on the right platform.",
    careerEn: "Career peak. Great branding. Good for promotion and collaborations.",
    philosophyEn: "Perpetuating brightness. Light comes from heritage and truth."
  },
  31: {
    fortune: "感应吸引。感情、商务洽谈的良机，真诚的沟通能产生强烈的共鸣。",
    career: "极佳的谈判期。通过共情和对他人需求的洞察，能轻松达成合作意向。",
    philosophy: "虚受人。心如虚谷，才能容纳他人的建议，产生深刻的感应。",
    fortuneEn: "Influence. Good time for relationships and negotiations through empathy.",
    careerEn: "Excellent bargaining. Insight into others' needs ensures cooperation.",
    philosophyEn: "Humility receives people. Be open-minded to resonate with others."
  },
  32: {
    fortune: "持久稳定。事情已经进入平稳期，关键在于能否持之以恒，不忘初心。",
    career: "深耕细作。不宜变动行业或策略。在平淡中坚持，复利效应会带来巨大回报。",
    philosophy: "立不易方。在变化的万象中，守住那颗不变的核心价值观。",
    fortuneEn: "Duration. Things are stable. Success depends on persistence and focus.",
    careerEn: "Deep cultivation. Don't change strategy. Patience leads to big rewards.",
    philosophyEn: "Standing firm. Keep your core values unchanged amid chaos."
  },
  33: {
    fortune: "退避自保。小人势力上升，目前不宜正面硬刚。暂时撤退是明智之举。",
    career: "收缩战线。与其在劣势中挣扎，不如主动离场或转入地下，保存实力。",
    philosophy: "远小人，不恶而严。退避不是懦弱，而是更有尊严地保持距离。",
    fortuneEn: "Retreat. Negative forces rise. Avoiding direct conflict is wise now.",
    careerEn: "Shrinking lines. Proactively exit or save strength for later.",
    philosophyEn: "Keeping distance. Retreat is dignity, not cowardice."
  },
  34: {
    fortune: "壮大冲动。力量极强，但容易因为鲁莽而陷入僵局。需克制强权欲望。",
    career: "扩张过快风险。虽然拥有优势，但容易触碰到法律或道德的红线。戒骄戒躁。",
    philosophy: "非礼弗履。力量越大，越需要礼制和规矩的约束。不要做“羝羊触藩”的事。",
    fortuneEn: "Great Power. Strong energy but prone to recklessness. Restrain dominance.",
    careerEn: "Expansion risks. Advantages exist, but avoid breaking rules. Be humble.",
    philosophyEn: "No breach of law. Power needs boundaries. Don't get stuck in ego."
  },
  35: {
    fortune: "晋升显赫。像旭日东升，你的才华终于被看到，获得了应有的地位。",
    career: "职场大跃进。受贵人提拔，成果显著。应乘胜追击，保持光明磊落的作风。",
    philosophy: "自昭明德。不仅要做出成绩，更要展现出你卓越的品质和德行。",
    fortuneEn: "Progress. Like a rising sun, your talent is finally recognized.",
    careerEn: "Career leap. Supported by mentors. Keep being transparent and bold.",
    philosophyEn: "Brightening virtue. Achieve results while showing excellent character."
  },
  36: {
    fortune: "韬光养晦。正处于极度黑暗或受压制的时刻。保护好内心的火种。",
    career: "怀才不遇。环境对你不利，甚至有被排挤的风险。低调做人，暗中积蓄。",
    philosophy: "莅众用晦而明。外表糊涂内心明白。在黑暗中等待黎明的智慧。",
    fortuneEn: "Darkening Light. In a period of suppression. Protect your inner spirit.",
    careerEn: "Unrecognized talent. Hostile environment. Stay low and save energy.",
    philosophyEn: "Being wise in shadow. Act simple while staying sharp internally."
  },
  37: {
    fortune: "内修家道。核心在于内部的治理与和谐。外部的成功源于内部的稳固。",
    career: "内部团队建设期。处理好办公室关系和基础管理，后方稳固则前方无忧。",
    philosophy: "言有物，行有恒。从身边的小事做起，从管理好自己的言行开始。",
    fortuneEn: "The Family. Focus on internal governance and harmony for stability.",
    careerEn: "Team building. Handle office relationships well to secure the base.",
    philosophyEn: "Substance in words. Start with small tasks and manage your conduct."
  },
  38: {
    fortune: "异中求同。存在矛盾与不和，但可以在某些小事上达成共识。",
    career: "求同存异。合作伙伴之间存在巨大分歧。寻找那1%的共识来维持现状。",
    philosophy: "同而异。君子和而不同。尊重个性和差异，在差异中寻找美感。",
    fortuneEn: "Opposition. Conflicts exist, but consensus is possible on small matters.",
    careerEn: "Seeking commonality. Partners differ; find minimal agreement to stay.",
    philosophyEn: "Unity in diversity. Respect individuality and find beauty in differences."
  },
  39: {
    fortune: "陷入泥淖。前方有无法逾越的高山或深水。强行突破只会自取其辱。",
    career: "项目搁浅。目前不宜推进。应退回来反思，寻求长辈或专业顾问的建议。",
    philosophy: "反身修德。困难是提醒你：目前的能力还不足以承载更大的野心。",
    fortuneEn: "Obstruction. Unsurmountable hurdles ahead. Forcing it leads to failure.",
    careerEn: "Stalled projects. Don't push. Retreat, reflect, and seek expert advice.",
    philosophyEn: "Refining self. Hardship signals your skills don't match your ambition."
  },
  40: {
    fortune: "如释重负。压力解除，误会消除。是一个难得的修复期和宽恕期。",
    career: "转危为安。纠纷得到解决，债项得以清偿。应尽快处理残余问题，重新出发。",
    philosophy: "赦过宥罪。放下过去的恩怨，轻装上阵。春天已经到来。",
    fortuneEn: "Deliverance. Pressure lifted, tension gone. A time for repair and pardon.",
    careerEn: "Danger passed. Disputes settled. Finish minor tasks and restart fast.",
    philosophyEn: "Forgiving errors. Drop old grudges and move forward lightly. Spring is here."
  },
  41: {
    fortune: "损己利人。有时为了长远的发展，必须主动牺牲当前的局部利益。",
    career: "收缩开支或降低预期。这种暂时的“损”是在为未来的“益”打基础。",
    philosophy: "惩忿窒欲。减少不必要的欲望和情绪，是最大的自我增益。",
    fortuneEn: "Decrease. Sacrificing short-term local interests for long-term growth.",
    careerEn: "Cut costs or lower expectations. This loss builds future gains.",
    philosophyEn: "Restraining desire. Reducing ego is the greatest self-improvement."
  },
  42: {
    fortune: "获利丰厚。大环境有利，你的付出得到了成倍的回报。适合大举进攻。",
    career: "扩张期。不仅是财富的增加，更是社会影响力的提升。应多行善举。",
    philosophy: "见善则迁，有过则改。利用上升期的正能量，迅速修正自己的缺陷。",
    fortuneEn: "Increase. Favorable environment; your efforts yield double rewards.",
    careerEn: "Expansion phase. Rise in both wealth and influence. Practice charity.",
    philosophyEn: "Imitating good. Use positive energy to fix your flaws quickly."
  },
  43: {
    fortune: "果断决裂。与邪恶、落后或阻碍发展的因素进行最后的、公开的摊牌。",
    career: "重大人事变动或战略决策。必须公开、公正且充满决心地采取行动。",
    philosophy: "施禄及下。在做出决断后，要通过分享利益来巩固新的秩序。",
    fortuneEn: "Break-through. Final showdown with negative factors or obstacles.",
    careerEn: "Strategic decision. Act publicly, fairly, and with total determination.",
    philosophyEn: "Sharing rewards. After deciding, distribute benefits to secure order."
  },
  44: {
    fortune: "邂逅危机。看似美好的相遇，实则隐藏着巨大的隐患或破坏性因素。",
    career: "防范渗透。一个微小的负面因素（如不靠谱的人或诱惑）正在进入核心圈。",
    philosophy: "勿用取女。不要被表象的诱惑迷惑，守住原则，不要轻信。",
    fortuneEn: "Coming to Meet. Seemingly good encounters may hide hidden dangers.",
    careerEn: "Preventing infiltration. A small negative factor is entering your circle.",
    philosophyEn: "Not marrying the maiden. Don't be fooled by appearances; hold principles."
  },
  45: {
    fortune: "精英汇聚。资源和人才正在自发地向你靠拢。是一个做大做强的好时机。",
    career: "建立联盟。适合举办大型会议、众筹或建立行业标准。需防范内部消耗。",
    philosophy: "除戎器，戒不虞。越是人群聚集，越要加强风险控制和安全防范。",
    fortuneEn: "Gathering Together. Resources and talent are gravitating toward you.",
    careerEn: "Building alliances. Good for large meetings or crowdfunding. Control risk.",
    philosophyEn: "Renewing weapons. High density requires stronger risk management."
  },
  46: {
    fortune: "稳步攀升。虽然速度不快，但由于基础扎实且方向正确，必能登顶。",
    career: "职场常青树。通过一点一滴的积累获得提拔。适合长期主义者。",
    philosophy: "顺德积小以高大。伟大的成就是由无数个微小的正确决策组成的。",
    fortuneEn: "Pushing Upward. Slow but steady progress on firm ground leads to peak.",
    careerEn: "Career longevity. Growth through accumulation. Best for long-termists.",
    philosophyEn: "Accumulating small things. Greatness comes from minor correct steps."
  },
  47: {
    fortune: "困顿磨砺。陷入了资源极其匮乏、言语无人相信的绝境。唯有信念支撑。",
    career: "职业生涯最低点。外部援助切断，口碑受损。此时多说无益，用行动证明。",
    philosophy: "致命遂志。在绝境中看清自己的底色，守住志向者必能迎来新生。",
    fortuneEn: "Oppression. Extreme scarcity of resources and trust. Only faith sustains.",
    careerEn: "Career low. External aid cut off. Words are useless; prove with action.",
    philosophyEn: "Staking life on will. See your true colors in crisis and hold your goal."
  },
  48: {
    fortune: "源远流长。你拥有核心竞争力和稳定的输出。只要维护好渠道，就能获益。",
    career: "专业深耕。你的技能像井水一样，虽然固定但能供养多人。需防“功亏一篑”。",
    philosophy: "劳民劝相。共享智慧与资源，通过服务他人来实现自我价值。",
    fortuneEn: "The Well. You have core competitiveness. Maintain the channel for gain.",
    careerEn: "Specialization. Your skills sustain many. Don't fail at the final step.",
    philosophyEn: "Encouraging help. Share wisdom and resources through service to others."
  },
  49: {
    fortune: "翻天覆地。旧的模式已经彻底行不通了，必须进行根本性的变革。",
    career: "品牌重塑或转行。这是一个痛苦但必须的重塑过程。要选择最合适的时机。",
    philosophy: "治历明时。变革要顺应天时人心。在旧秩序消亡前，确立新方向。",
    fortuneEn: "Revolution. Old models no longer work; fundamental change is mandatory.",
    careerEn: "Rebranding or pivoting. A painful but necessary process. Choose timing.",
    philosophyEn: "Ordering the calendar. Align change with timing and public will."
  },
  50: {
    fortune: "革故鼎新。变革已经成功，现在是建立新标准、确立新权威的时候了。",
    career: "重获新生。新项目步入正轨，品牌声望达到新高度。适合任命核心人才。",
    philosophy: "正位凝命。稳重、大气，承载天命。好的制度需要好的执行者。",
    fortuneEn: "The Caldron. Change succeeded; now establish new standards and authority.",
    careerEn: "New life. Projects are on track. Reputation peaks. Hire core talents.",
    philosophyEn: "Consolidating fate. Be steady and grand to carry your destiny well."
  },
  51: {
    fortune: "雷震警醒。突如其来的变故让你措手不及，但这也是震碎平庸、唤醒斗志的契机。",
    career: "行业震荡。突发事件考验你的反应。只要内心不乱，反而能发现蓝海。",
    philosophy: "恐惧修省。在敬畏中反思，在震动中修正方向。笑谈风云者必有底气。",
    fortuneEn: "The Arousing. Sudden change surprises you; it's a chance to wake up.",
    careerEn: "Industry shock. Crises test your reaction. Stay calm to find blue oceans.",
    philosophyEn: "Fear and introspection. Reflect with awe and fix your direction now."
  },
  52: {
    fortune: "止欲定心。目前不宜动弹。强制让自己静下来，观察内心的波澜。",
    career: "事业停滞期。与其乱跑，不如原地修整。在静止中寻找深层的动能。",
    philosophy: "思不出其位。安分守己，守住内心。不该想的不想，不该做的不做。",
    fortuneEn: "Keeping Still. Don't move. Force yourself to be quiet and observe within.",
    careerEn: "Career lull. Instead of running around, rest. Find energy in stillness.",
    philosophyEn: "Don't overstep thoughts. Stay within your role and guard your heart."
  },
  53: {
    fortune: "渐进成功。事情正在按照既定的节奏稳步推进。切忌拔苗助长。",
    career: "职业阶梯。一步一个脚印的晋升。虽然慢，但每一步都踩在实处。",
    philosophy: "居贤德善俗。美德需要时间的沉淀。通过长期的坚持来改变环境。",
    fortuneEn: "Development. Things advance steadily at a natural pace. Don't rush it.",
    careerEn: "Career ladder. Step-by-step promotion. Slow but very solid growth.",
    philosophyEn: "Abiding in virtue. Virtue needs time. Change the world with persistence."
  },
  54: {
    fortune: "由于错位。目前处于一个尴尬或次要的位置，必须学会妥协与忍耐。",
    career: "非主流业务或辅助岗位。你的权力受限，容易受制于人。不宜有野心。",
    philosophy: "永终知敝。看清事物的终极归宿，在无奈中寻找那份淡然与从容。",
    fortuneEn: "Marrying Maiden. You're in a secondary role; learn to compromise and wait.",
    careerEn: "Non-core position. Limited power, easily controlled. Avoid big ambitions.",
    philosophyEn: "Knowing the transitory. See the end of things and find peace in limits."
  },
  55: {
    fortune: "如日中天。处于极盛时刻。财源滚滚，但也意味着衰落的开始。",
    career: "大爆发。短期内获得巨大成功和关注。应尽快将成果转化为长期资产。",
    philosophy: "日中则昃。警惕巅峰后的阴影。在最灿烂时要有处理危机的预案。",
    fortuneEn: "Abundance. At the peak of success. Great wealth, but decline is near.",
    careerEn: "Explosion. Short-term massive success. Convert results into long assets.",
    philosophyEn: "Sun at midday sets. Beware shadows after peaks. Prepare crisis plans."
  },
  56: {
    fortune: "客旅漂泊。身份不稳定，处于变动和流浪中。应保持低调和警觉。",
    career: "出差、外派或自由职业。由于没有根基，应多结交当地友人，办事谨慎。",
    philosophy: "明慎用刑。异乡客最忌张扬。通过观察规则来保护自己的安全。",
    fortuneEn: "The Wanderer. Unstable status; in transition. Stay low-profile and alert.",
    careerEn: "Outposted or freelance. No roots; make local friends and act carefully.",
    philosophyEn: "Cautious judgement. Strangers shouldn't be loud. Observe local rules."
  },
  57: {
    fortune: "柔顺渗透。像风一样无孔不入。通过柔性的方式，逐渐影响局面。",
    career: "公关与渗透。不宜直接冲突。通过反复的沟通和温和的影响力达成目标。",
    philosophy: "申命行事。反复确认目标，通过持续的微调来达到最终的精准。",
    fortuneEn: "The Gentle. Like wind, permeate softly. Influence the situation gently.",
    careerEn: "PR and influence. Avoid conflict. Achieve goals via constant soft talk.",
    philosophyEn: "Repeating commands. Confirm goals and use micro-adjustments for precision."
  },
  58: {
    fortune: "喜悦交流。氛围愉悦，通过分享和沟通能让事情变得更顺利。",
    career: "销售与演讲的好时机。你的亲和力能打动客户。但要注意不要流于肤浅。",
    philosophy: "朋友讲习。快乐源于学习和交流。建立一个能互相启发的圈子。",
    fortuneEn: "The Joyous. Pleasant atmosphere. Sharing and talk make things smooth.",
    careerEn: "Good for sales/speeches. Charisma wins clients. Don't be superficial.",
    philosophyEn: "Discussion with friends. Joy comes from learning and shared growth."
  },
  59: {
    fortune: "冰消瓦解。隔阂正在消除，僵局正在打破。适合化解矛盾和传播理念。",
    career: "危机公关。通过博大的胸怀和远大的理想来重塑团队，解决内部涣散。",
    philosophy: "享于帝立庙。在动荡中寻找那个能凝聚人心的“终极信仰”。",
    fortuneEn: "Dispersion. Barriers dissolving, stalemates breaking. Good for resolving conflict.",
    careerEn: "Crisis PR. Rebuild teams through grand visions. Fix internal fragmentation.",
    philosophyEn: "Building temples. Find the ultimate faith that unites hearts in chaos."
  },
  60: {
    fortune: "法度节制。设立边界和规则，能防止资源浪费，但不可过度苛刻。",
    career: "规范化管理。建立流程和制度。适度的节制是长久的保障。",
    philosophy: "制数度，议德行。明白自由的前提是克制。苦节不可贞。",
    fortuneEn: "Limitation. Set boundaries to prevent waste, but don't be too harsh.",
    careerEn: "Standardized management. Build processes. Moderation ensures longevity.",
    philosophyEn: "Creating measures. Freedom requires restraint. Bitter limits don't last."
  },
  61: {
    fortune: "至诚感通。诚信是目前最有力的武器，能感动连鱼、猪都能感应。",
    career: "建立信任。通过绝对的透明和真诚赢得核心客户或伙伴，而非依赖合同。",
    philosophy: "议狱缓死。诚信源于对生命的敬畏和对真相的坚持。中心信也。",
    fortuneEn: "Inner Truth. Sincerity is your best weapon; it can move the hardest hearts.",
    careerEn: "Build trust. Win core clients through transparency, not just contracts.",
    philosophyEn: "Deliberating justice. Integrity comes from reverence for life and truth."
  },
  62: {
    fortune: "小事可行。大举动有风险，只能在细微处下功夫。保持谦卑的态度。",
    career: "细节控。适合处理行政杂务、财务核算。此时“过分谨慎”并非坏事。",
    philosophy: "行过乎恭，丧过乎哀。在此时，宁可显得过于严谨，也不要显得傲慢。",
    fortuneEn: "Preponderance of Small. Major moves risky. Focus on details and be humble.",
    careerEn: "Detail-oriented. Good for admin/finance. Over-caution is a virtue now.",
    philosophyEn: "Over-conscientious. Better to be too rigorous than appear arrogant."
  },
  63: {
    fortune: "既成圆满。事情已经完成。初吉终乱。必须时刻警惕，防止盛极而衰。",
    career: "项目交付。应立即开始预防性维护，不要松懈。防范未来的不确定性。",
    philosophy: "思患预防之。最危险时刻就是大功告成时。维持动态平衡。",
    fortuneEn: "After Completion. Success initially, but disorder later. Stay vigilant.",
    careerEn: "Project delivered. Start preventive maintenance. Don't lower your guard.",
    philosophyEn: "Thinking of danger. The riskiest moment is when a task is done."
  },
  64: {
    fortune: "未济希望。黎明前的黑暗或新循环开始。虽艰辛但充满无限可能。",
    career: "事业重组。应像“小狐过河”般谨慎，在最后一刻稳住，不要前功尽弃。",
    philosophy: "慎辨物居方。在变化末尾洞察规律。一切终点都是起点。",
    fortuneEn: "Before Completion. Darkness before dawn. Hardship exists, but hope is infinite.",
    careerEn: "Career reorganization. Be as cautious as a fox crossing ice. Stay steady.",
    philosophyEn: "Differentiating things. Endings are beginnings. Perceive patterns early."
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
