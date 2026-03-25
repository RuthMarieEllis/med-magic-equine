export const categories = [
  { id: 'nsaids',         name: 'NSAIDs & Pain Relief',       icon: '💊', color: '#C0392B', description: 'Non-steroidal anti-inflammatory drugs for pain, fever, and inflammation' },
  { id: 'antibiotics',    name: 'Antibiotics',                icon: '🔬', color: '#1A56A8', description: 'Antimicrobial medications for bacterial infections' },
  { id: 'sedatives',      name: 'Sedatives & Tranquilizers',  icon: '💉', color: '#7B3FA0', description: 'Medications for sedation, restraint, and anesthesia support' },
  { id: 'dewormers',      name: 'Dewormers',                  icon: '🌿', color: '#2E8B57', description: 'Anthelmintic medications for internal parasite control' },
  { id: 'corticosteroids',name: 'Corticosteroids',            icon: '⚡', color: '#D97706', description: 'Steroid medications for inflammation, immune conditions, and respiratory disease' },
  { id: 'gi',             name: 'GI & Digestive',             icon: '🫀', color: '#0D9488', description: 'Medications for gastric ulcers, colic, and digestive health' },
  { id: 'reproductive',   name: 'Reproductive & Hormonal',    icon: '🌸', color: '#B45A8A', description: 'Hormonal medications for reproductive management and breeding' },
  { id: 'emergency',      name: 'Emergency & Critical Care',  icon: '🚨', color: '#DC2626', description: 'Life-saving medications used in emergency situations' },
  { id: 'joint',          name: 'Joint & Lameness',           icon: '🦴', color: '#935D2A', description: 'Medications and injectables for joint health and lameness management' },
  { id: 'muscle',         name: 'Muscle & Neurological',      icon: '🧠', color: '#546E7A', description: 'Medications for muscle relaxation and neurological conditions' },
]

export const medications = [

  // ── NSAIDs ─────────────────────────────────────────────────────────────────

  {
    id: 'bute',
    name: 'Phenylbutazone',
    brandNames: ['Bute', 'Equipalazone', 'Butazolidin', 'Butequine'],
    categoryId: 'nsaids',
    rxRequired: true,
    description: 'Phenylbutazone ("Bute") is one of the most widely used NSAIDs in equine medicine. It inhibits prostaglandin synthesis to reduce pain, fever, and inflammation throughout the body. Available in multiple forms, it is typically the first-line choice for musculoskeletal pain in horses.',
    uses: [
      'Musculoskeletal pain and lameness (arthritis, laminitis, soft tissue injuries)',
      'Post-surgical or post-procedure pain management',
      'Reduction of fever',
      'Management of colic pain (short-term)',
      'Navicular disease and chronic joint conditions',
    ],
    dosage: '2.2–4.4 mg/kg orally or IV, once or twice daily. Maximum recommended dose is 4.4 mg/kg/day. Oral paste: typically one scoop (1 g) per 220 lbs (100 kg). Do not exceed 5 days at full dose without veterinary reassessment. Lower doses (1–2 mg/kg) are preferred for long-term use.',
    forms: ['Oral paste', 'Powder', 'Tablet', 'Injectable (IV only — never IM)'],
    contraindications: [
      'Horses with pre-existing renal (kidney) disease or impaired renal function',
      'Active gastrointestinal ulceration or history of right dorsal colitis',
      'Concurrent use with other NSAIDs (risk of additive GI and renal toxicity)',
      'Hypovolemia or dehydration — must ensure adequate hydration before use',
      'Foals under 6 weeks of age',
      'Horses with severe liver disease',
    ],
    interactions: [
      'Other NSAIDs (Banamine, Equioxx): increased risk of GI ulceration and renal failure — do not combine',
      'Warfarin and anticoagulants: phenylbutazone displaces protein binding and potentiates anticoagulant effect',
      'Corticosteroids: combined use significantly increases GI ulcer risk',
      'Aminoglycoside antibiotics (gentamicin): combined nephrotoxic effect',
      'Protein-bound drugs: may compete for plasma protein binding sites',
    ],
    warnings: [
      'Do NOT administer intramuscularly — causes severe tissue necrosis',
      'Long-term use linked to right dorsal colitis — use lowest effective dose for shortest duration',
      'Not approved for use in horses intended for human consumption',
      'Banned substance in many competition disciplines — check withdrawal times',
    ],
  },

  {
    id: 'banamine',
    name: 'Flunixin Meglumine',
    brandNames: ['Banamine', 'Flunixin', 'Prevail'],
    categoryId: 'nsaids',
    rxRequired: true,
    description: 'Flunixin meglumine is a potent NSAID frequently used for visceral (gut) pain, particularly colic, as well as ocular inflammation and endotoxemia. It is the preferred NSAID for abdominal pain because of its strong efficacy against gut-related prostaglandins.',
    uses: [
      'Colic pain management (visceral pain)',
      'Endotoxemia and septic shock support',
      'Ocular inflammation (uveitis, eye injuries)',
      'Post-surgical inflammation',
      'Respiratory inflammatory conditions',
      'Reduction of fever',
    ],
    dosage: '1.1 mg/kg IV or orally, once daily. For colic: 1.1 mg/kg IV. Oral granules: 500 mg per 500 kg horse once daily. Maximum 5 days of use. IV route preferred for rapid onset; oral paste available for field use.',
    forms: ['Injectable (IV only)', 'Oral granules', 'Oral paste'],
    contraindications: [
      'Concurrent use with other NSAIDs — do not combine with Bute within 12 hours',
      'Horses with renal disease or dehydration',
      'Active GI ulceration',
      'Should not mask pain from surgical colic conditions that require intervention',
    ],
    interactions: [
      'Other NSAIDs: additive GI toxicity and nephrotoxicity',
      'Corticosteroids: increased ulcer risk',
      'Aminoglycosides: increased kidney stress',
      'Anticoagulants: may alter clotting parameters',
    ],
    warnings: [
      'Do NOT administer intramuscularly — risk of severe Clostridial myonecrosis ("injection site infection")',
      'Can mask the severity of colic — use with caution when surgical colic is possible',
      'Not for use in horses with known hypersensitivity to flunixin',
      'Competition withdrawal times apply',
    ],
  },

  {
    id: 'equioxx',
    name: 'Firocoxib',
    brandNames: ['Equioxx', 'Previcox (canine formulation — not approved for horses)'],
    categoryId: 'nsaids',
    rxRequired: true,
    description: 'Firocoxib is a COX-2 selective NSAID, meaning it more specifically targets the inflammatory pathway while causing less GI and renal side effects than traditional NSAIDs. It is the first COX-2 selective NSAID approved for horses and is preferred for long-term pain management.',
    uses: [
      'Osteoarthritis and chronic joint pain',
      'Long-term management of musculoskeletal conditions',
      'Post-operative pain where extended NSAID use is needed',
      'Laminitis management',
    ],
    dosage: '0.1 mg/kg orally once daily. Equioxx paste: one syringe graduation per 100 lbs body weight. Equioxx injectable: 0.09 mg/kg IV once daily (up to 5 days). Oral tablet (Previcox): Not FDA-approved for horses — avoid.',
    forms: ['Oral paste', 'Injectable (IV)'],
    contraindications: [
      'Known hypersensitivity to COX-2 inhibitors or sulfonamides',
      'Horses with existing renal or hepatic disease',
      'Concurrent use with other NSAIDs',
      'Horses under 12 months of age',
    ],
    interactions: [
      'Other NSAIDs: do not combine',
      'Corticosteroids: increased GI risk',
      'Aminoglycosides: potential additive nephrotoxicity',
    ],
    warnings: [
      'Lower GI side effect profile than non-selective NSAIDs but risk still present with long-term use',
      'Competition withdrawal times apply',
    ],
  },

  {
    id: 'meloxicam',
    name: 'Meloxicam',
    brandNames: ['Metacam', 'Meloxicam'],
    categoryId: 'nsaids',
    rxRequired: true,
    description: 'Meloxicam is a COX-2 preferential NSAID with a relatively favorable GI safety profile. While not FDA-approved specifically for horses, it is widely used off-label and is a common choice when a less GI-aggressive NSAID is preferred, especially in horses prone to ulcers.',
    uses: [
      'Musculoskeletal pain and inflammation',
      'Post-operative analgesia',
      'Horses with history of GI sensitivity to other NSAIDs',
      'Fever reduction',
    ],
    dosage: '0.6 mg/kg orally once daily. Typically given mixed with feed. Injectable formulation: 0.6 mg/kg IV. Duration of use should be discussed with your veterinarian.',
    forms: ['Oral liquid', 'Injectable'],
    contraindications: [
      'Concurrent NSAID use',
      'Renal or hepatic disease',
      'Dehydrated horses',
    ],
    interactions: [
      'Other NSAIDs: do not combine',
      'Corticosteroids: increased ulcer risk',
      'Nephrotoxic drugs: additive kidney stress',
    ],
    warnings: [
      'Off-label use in horses — consult veterinarian for appropriate dosing',
    ],
  },

  {
    id: 'ketoprofen',
    name: 'Ketoprofen',
    brandNames: ['Ketofen'],
    categoryId: 'nsaids',
    rxRequired: true,
    description: 'Ketoprofen is an injectable NSAID used primarily in equine hospital settings for acute pain and inflammation. It has a rapid onset of action and is often used when IV administration is needed and other NSAIDs are contraindicated or insufficient.',
    uses: [
      'Acute musculoskeletal inflammation and pain',
      'Post-surgical analgesia',
      'Colic pain (visceral pain)',
      'Fever reduction in hospitalized horses',
    ],
    dosage: '2.2 mg/kg IV once daily for up to 5 days. Must be given IV — not for IM or SC use.',
    forms: ['Injectable (IV only)'],
    contraindications: [
      'Concurrent NSAID use',
      'Renal impairment or dehydration',
      'Active GI ulceration',
    ],
    interactions: [
      'Other NSAIDs: additive toxicity',
      'Anticoagulants: may alter clotting',
      'Aminoglycosides: nephrotoxic combination',
    ],
    warnings: [
      'IV use only — do not administer IM',
      'Primarily a hospital/clinic medication',
    ],
  },

  // ── ANTIBIOTICS ────────────────────────────────────────────────────────────

  {
    id: 'smz',
    name: 'Trimethoprim Sulfamethoxazole',
    brandNames: ['SMZ-TMP', 'TMS', 'Tribrissen', 'Co-Trimoxazole'],
    categoryId: 'antibiotics',
    rxRequired: true,
    description: 'Trimethoprim sulfamethoxazole (SMZ-TMP) is one of the most commonly used oral antibiotics in equine medicine. It is a combination antibiotic that works synergistically to block two steps in bacterial folic acid synthesis, giving it a broad spectrum of activity.',
    uses: [
      'Respiratory infections (strangles, pneumonia, pleuropneumonia)',
      'Urinary tract infections',
      'Skin and soft tissue infections',
      'Wounds and wound management support',
      'Protozoal myeloencephalitis (EPM) — in combination with other agents',
    ],
    dosage: '24–30 mg/kg orally twice daily (combined dose of TMP + sulfonamide). Typical adult horse (500 kg): 10–12 tablets or equivalent paste twice daily. Treatment course typically 5–14 days depending on infection.',
    forms: ['Oral tablets', 'Oral paste', 'Oral powder'],
    contraindications: [
      'Known hypersensitivity to sulfonamides or trimethoprim',
      'Severe hepatic disease',
      'Blood dyscrasias or anemia',
      'Horses with marked kidney impairment',
    ],
    interactions: [
      'Phenylbutazone: may displace sulfonamides from protein binding sites — monitor closely',
      'Warfarin: potentiates anticoagulant effect',
      'Methotrexate: increased toxicity risk',
      'Digoxin: may elevate digoxin plasma levels',
    ],
    warnings: [
      'Prolonged use may cause folate deficiency — monitor CBC in long-term use',
      'Some horses develop diarrhea due to disruption of hindgut flora — discontinue if severe colitis develops',
    ],
  },

  {
    id: 'penicillin',
    name: 'Penicillin G Procaine',
    brandNames: ['Combi-Pen', 'Pen-G', 'Agri-Cillin'],
    categoryId: 'antibiotics',
    rxRequired: true,
    description: 'Penicillin G procaine is a bactericidal antibiotic effective against gram-positive organisms including streptococcal species. It is one of the oldest and most widely used equine antibiotics, particularly for respiratory and wound infections.',
    uses: [
      'Streptococcal infections (strangles caused by Strep. equi)',
      'Respiratory tract infections',
      'Wound infections and cellulitis',
      'Clostridial infections',
      'Leptospirosis',
    ],
    dosage: '22,000 IU/kg IM twice daily, or 22,000–44,000 IU/kg IM once daily depending on condition. Typical adult horse: 10–20 mL IM per injection. Treatment duration: 5–10 days for most infections.',
    forms: ['Injectable (IM only)'],
    contraindications: [
      'Known hypersensitivity or allergy to penicillin',
      'Do not administer intravenously — can cause fatal cardiovascular reaction',
      'Use with extreme caution in horses with history of antibiotic-associated diarrhea',
    ],
    interactions: [
      'Aminoglycosides (gentamicin): may be synergistic for gram-positive organisms but should not be mixed in same syringe',
      'Tetracyclines: bacteriostatic drugs may antagonize bactericidal effect of penicillin',
      'Probenecid: increases and prolongs penicillin blood levels',
    ],
    warnings: [
      'NEVER administer IV — can cause sudden cardiac arrest',
      'Administer deep IM only; rotate injection sites',
      'Anaphylactic reactions possible — have epinephrine on hand',
      'Refrigerate; use within 7 days of opening',
    ],
  },

  {
    id: 'gentamicin',
    name: 'Gentamicin',
    brandNames: ['Gentocin', 'Gentamicin Sulfate'],
    categoryId: 'antibiotics',
    rxRequired: true,
    description: 'Gentamicin is an aminoglycoside antibiotic with potent activity against gram-negative organisms. It is commonly used in combination with penicillin to provide broad-spectrum coverage. Regional limb perfusion with gentamicin is a key technique for treating severe hoof and lower limb infections.',
    uses: [
      'Gram-negative bacterial infections (Pseudomonas, E. coli, Klebsiella)',
      'Septicemia and bacteremia',
      'Respiratory infections (gram-negative pneumonia)',
      'Regional limb perfusion for hoof and lower limb infections',
      'Uterine infections (intrauterine infusion)',
      'Ophthalmic infections (topical preparations)',
    ],
    dosage: 'Systemic: 6.6 mg/kg IV or IM once daily. Regional limb perfusion: 1–2 g in 60 mL saline. Treatment duration: typically 5–7 days systemic use. Monitor renal function with prolonged use.',
    forms: ['Injectable (IV, IM)', 'Topical ophthalmic solution'],
    contraindications: [
      'Pre-existing renal disease — highly nephrotoxic',
      'Dehydrated horses — must correct hydration before use',
      'Concurrent use with other nephrotoxic drugs (NSAIDs, furosemide)',
      'Neuromuscular blocking agents (respiratory depression risk)',
    ],
    interactions: [
      'NSAIDs: additive nephrotoxicity — avoid concurrent use or monitor closely',
      'Furosemide: increased nephrotoxic and ototoxic risk',
      'Penicillin: synergistic effect against many organisms (do not mix in same syringe)',
      'Other aminoglycosides: do not combine',
    ],
    warnings: [
      'Nephrotoxic — monitor BUN, creatinine, and urine output during treatment',
      'Ototoxic with prolonged use or high doses',
      'Ensure adequate hydration throughout treatment course',
    ],
  },

  {
    id: 'metronidazole',
    name: 'Metronidazole',
    brandNames: ['Flagyl', 'Metro'],
    categoryId: 'antibiotics',
    rxRequired: true,
    description: 'Metronidazole is an antibiotic and antiprotozoal with excellent activity against anaerobic bacteria. It is particularly useful for treating anaerobic infections including those associated with wounds, abscesses, and periodontal disease.',
    uses: [
      'Anaerobic bacterial infections (deep wounds, abscesses)',
      'Peritonitis with anaerobic involvement',
      'Colitis associated with anaerobic bacteria',
      'Dental and periodontal infections',
      'Protozoal infections',
    ],
    dosage: '15–25 mg/kg orally 3 times daily, or 20 mg/kg orally twice daily. Rectal administration possible in horses that cannot eat: 15–20 mg/kg per rectum. IV formulation used in hospital settings.',
    forms: ['Oral tablets', 'IV injectable', 'Rectal administration'],
    contraindications: [
      'Horses with neurological disease (may worsen CNS signs)',
      'Known hypersensitivity',
      'Use with caution in hepatic disease',
    ],
    interactions: [
      'Warfarin: significantly enhances anticoagulant effect',
      'Phenobarbital: may reduce metronidazole efficacy',
      'Alcohol-containing products: disulfiram-like reaction possible',
    ],
    warnings: [
      'May cause inappetence and mild GI upset',
      'High doses can cause neurological signs — reduce dose if ataxia develops',
    ],
  },

  {
    id: 'doxycycline',
    name: 'Doxycycline',
    brandNames: ['Vibramycin', 'Monodox'],
    categoryId: 'antibiotics',
    rxRequired: true,
    description: 'Doxycycline is a broad-spectrum tetracycline antibiotic with activity against many gram-positive, gram-negative, and intracellular organisms. It is used in equine medicine for respiratory infections, Lyme disease, and certain protozoal conditions.',
    uses: [
      'Lyme disease (Borrelia burgdorferi)',
      'Respiratory infections caused by Mycoplasma or Chlamydia',
      'Ehrlichiosis / Anaplasmosis (Anaplasma phagocytophilum)',
      'Wound infections where tetracycline-sensitive organisms are suspected',
    ],
    dosage: '10 mg/kg orally twice daily. Oral bioavailability in horses is variable; IV formulation available for severe cases at 10 mg/kg IV slowly over 30–60 minutes once daily. Duration typically 3–4 weeks for Lyme disease.',
    forms: ['Oral capsule/tablet', 'Injectable (IV — administer slowly)'],
    contraindications: [
      'Horses under 2 years of age (risk of disrupting bone and tooth development)',
      'Concurrent use with calcium-containing products — chelation reduces absorption',
      'Severe hepatic disease',
    ],
    interactions: [
      'Antacids, calcium, iron supplements: markedly reduce oral absorption — give 2 hours apart',
      'Penicillin: bacteriostatic action may antagonize bactericidal effect',
      'Warfarin: enhances anticoagulant effect',
    ],
    warnings: [
      'IV doxycycline must be given slowly — rapid administration can cause cardiovascular collapse',
      'Can cause photosensitivity in some horses',
      'Oral bioavailability in horses is lower than in other species',
    ],
  },

  // ── SEDATIVES ──────────────────────────────────────────────────────────────

  {
    id: 'acepromazine',
    name: 'Acepromazine',
    brandNames: ['Ace', 'PromAce', 'ACP'],
    categoryId: 'sedatives',
    rxRequired: true,
    description: 'Acepromazine is a phenothiazine tranquilizer widely used in equine practice for pre-anesthetic medication, restraint, and mild sedation. It reduces anxiety and provides sedation without analgesia. It does not prevent a horse from reacting to pain.',
    uses: [
      'Pre-anesthetic medication to reduce anxiety',
      'Mild sedation for non-painful procedures (clipping, bathing, transport)',
      'Reduction of excitement before loading or trailering',
      'Treatment of azoturia (tying-up) to reduce muscle spasm and anxiety',
    ],
    dosage: '0.02–0.05 mg/kg IM or IV (slowly). Typical adult horse (500 kg): 25–50 mg IM. Onset: 15–30 minutes IM. Duration: 4–8 hours. Lower doses are preferred — high doses increase side effect risk without improving sedation quality.',
    forms: ['Injectable (IM or slow IV)'],
    contraindications: [
      'Stallions — risk of paraphimosis (penile prolapse, which can be permanent)',
      'Horses in shock or with cardiovascular compromise',
      'Hypovolemic or dehydrated horses',
      'Horses with epilepsy or history of seizures',
      'Breed caution: Boxers and brachycephalic breeds (equine equivalent: some draft breeds) may be more sensitive',
    ],
    interactions: [
      'Other CNS depressants (xylazine, detomidine, opioids): additive sedation — use reduced doses when combining',
      'Propofol and injectable anesthetics: enhances and prolongs anesthetic effects',
      'Organophosphate insecticides: potentiated CNS depression',
    ],
    warnings: [
      'NEVER use in stallions — risk of permanent penile prolapse',
      'Does NOT provide analgesia — a sedated horse can still respond violently to pain',
      'Can cause significant hypotension — not suitable for compromised horses',
      'No reversal agent available',
    ],
  },

  {
    id: 'xylazine',
    name: 'Xylazine',
    brandNames: ['Rompun', 'AnaSed', 'Sedazine'],
    categoryId: 'sedatives',
    rxRequired: true,
    description: 'Xylazine is an alpha-2 adrenergic agonist that provides dose-dependent sedation, muscle relaxation, and analgesia. It is one of the most commonly used equine sedatives and forms the backbone of many standing sedation and field anesthesia protocols.',
    uses: [
      'Standing sedation for minor procedures',
      'Pre-anesthetic medication',
      'Field sedation for wound repair, dental work, imaging',
      'Colic pain management (short-term visceral analgesia)',
      'Component of "triple drip" or total IV anesthesia protocols',
    ],
    dosage: 'IV: 0.5–1.1 mg/kg for sedation; 1.1 mg/kg for deep sedation or pre-anesthetic. IM: 1.0–2.2 mg/kg (slower onset, less predictable). Onset IV: 1–2 minutes. Duration: 20–30 minutes sedation. Horses are approximately 10 times more sensitive to xylazine than cattle.',
    forms: ['Injectable (IV preferred, IM possible)'],
    contraindications: [
      'Last trimester of pregnancy (can induce premature labor)',
      'Cardiac arrhythmias or known heart disease',
      'Respiratory compromise',
      'Horses in severe shock',
    ],
    interactions: [
      'Acepromazine: additive sedation — reduce xylazine dose by 30–50% when combining',
      'Opioids (butorphanol): synergistic sedation and analgesia — standard combination',
      'Ketamine: essential combination for standing chemical restraint or field anesthesia',
      'Epinephrine: risk of cardiac arrhythmias when used concurrently',
    ],
    warnings: [
      'Horses may still kick even when heavily sedated — never stand directly behind a sedated horse',
      'Causes dose-dependent cardiovascular depression and bradycardia',
      'Atipamezole or yohimbine can partially reverse effects in emergencies',
      'Sensitizes myocardium to catecholamines — avoid epinephrine use',
    ],
  },

  {
    id: 'detomidine',
    name: 'Detomidine',
    brandNames: ['Dormosedan', 'Dormosedan Gel'],
    categoryId: 'sedatives',
    rxRequired: true,
    description: 'Detomidine is a more potent and longer-acting alpha-2 agonist than xylazine. It provides superior sedation for more involved standing procedures. Dormosedan Gel is the only FDA-approved oral transmucosal (OTM) equine sedative, placed under the tongue.',
    uses: [
      'Standing sedation for dental floating, imaging, minor surgery',
      'Oral transmucosal (OTM) sedation for trailer loading, clipping, farrier work',
      'Pre-anesthetic sedation',
      'Combined with butorphanol for deeper standing sedation protocols',
    ],
    dosage: 'IV: 10–40 mcg/kg (0.01–0.04 mg/kg). IM: 20–40 mcg/kg. Dormosedan Gel (OTM): 40 mcg/kg placed under the tongue — peak effect in 40 minutes, do not administer feed or water for 30 minutes. Duration: 30–90 minutes depending on dose and route.',
    forms: ['Injectable (IV or IM)', 'Oral transmucosal gel'],
    contraindications: [
      'Cardiac disease or arrhythmias',
      'Severe respiratory disease',
      'Last trimester of pregnancy',
      'Horses in shock or hemodynamically unstable',
    ],
    interactions: [
      'Butorphanol: standard combination for enhanced sedation and analgesia',
      'Other alpha-2 agonists: do not combine',
      'Acepromazine: use with caution; reduces required dose of detomidine',
    ],
    warnings: [
      'Do not feed horse for 30 minutes after Dormosedan Gel administration',
      'Horse may appear sleepy but can still react — maintain safe distance from hindquarters',
      'More potent than xylazine — use conservative doses initially',
    ],
  },

  {
    id: 'butorphanol',
    name: 'Butorphanol',
    brandNames: ['Torbugesic', 'Dolorex'],
    categoryId: 'sedatives',
    rxRequired: true,
    description: 'Butorphanol is an opioid analgesic (kappa agonist / mu antagonist) that provides visceral analgesia and enhances the sedative effects of alpha-2 agonists. It is rarely used alone but is a standard addition to xylazine or detomidine protocols.',
    uses: [
      'Visceral pain (colic analgesia)',
      'Combined sedation protocols with xylazine or detomidine',
      'Post-operative pain management',
      'Pre-anesthetic medication',
    ],
    dosage: '0.02–0.1 mg/kg IV or IM. Typically 0.04–0.1 mg/kg combined with xylazine (0.5–1.1 mg/kg IV). Duration of analgesia: 30–60 minutes. Higher doses may cause GI hypomotility.',
    forms: ['Injectable (IV or IM)'],
    contraindications: [
      'Horses with severe hepatic disease',
      'Use alone in horses requiring restraint (insufficient sedation without alpha-2 agonist)',
    ],
    interactions: [
      'Xylazine and detomidine: synergistic — standard combination; reduce alpha-2 agonist dose when combining',
      'Other opioids: additive CNS depression',
      'CNS depressants generally: enhanced sedation',
    ],
    warnings: [
      'May cause GI hypomotility with high or repeated doses — monitor for post-procedure ileus',
      'Controlled substance in most jurisdictions',
      'Excitatory behavior can occur if given without a concurrent alpha-2 agonist',
    ],
  },

  // ── DEWORMERS ──────────────────────────────────────────────────────────────

  {
    id: 'ivermectin',
    name: 'Ivermectin',
    brandNames: ['Ivermectin', 'Equimax (with praziquantel)', 'Zimecterin', 'IverCare'],
    categoryId: 'dewormers',
    rxRequired: false,
    description: 'Ivermectin is a macrocyclic lactone antiparasitic effective against a broad range of internal and external parasites. It is the most widely used equine dewormer worldwide and the first-line treatment for large strongyles, bots, and most ascarids. Available over-the-counter.',
    uses: [
      'Large and small strongyles (adults)',
      'Bots (Gasterophilus spp.)',
      'Pinworms (Oxyuris equi)',
      'Roundworms (Parascaris equorum) in foals',
      'Lungworms (Dictyocaulus arnfieldi)',
      'Skin parasites (Habronema, Onchocerca)',
    ],
    dosage: '200 mcg/kg orally as a single dose. One full syringe of standard paste (6.08 g tube) treats a 1,250 lb (568 kg) horse. Administer by oral paste directly into the back of the mouth. Repeat every 6–12 weeks based on fecal egg count monitoring.',
    forms: ['Oral paste', 'Oral liquid', 'Oral gel'],
    contraindications: [
      'Foals under 4 weeks of age',
      'Horses with known hypersensitivity to ivermectin',
      'Use with caution in severely debilitated horses',
    ],
    interactions: [
      'Spinosad-containing products: not established in horses',
      'Other macrocyclic lactones: do not combine',
    ],
    warnings: [
      'Resistance is increasing — base treatment on fecal egg count (FEC) testing, not calendar-based deworming',
      'NOT effective against encysted small strongyle larvae — use moxidectin for this indication',
      'Drug residues remain in manure and can harm dung beetles — minimize environmental contamination',
    ],
  },

  {
    id: 'moxidectin',
    name: 'Moxidectin',
    brandNames: ['Quest', 'Quest Plus (with praziquantel)'],
    categoryId: 'dewormers',
    rxRequired: false,
    description: 'Moxidectin is a macrocyclic lactone with the unique ability to kill encysted small strongyle larvae (cyathostomes), which are the most clinically significant parasite of adult horses and resistant to ivermectin. It is the most potent equine dewormer currently available.',
    uses: [
      'Encysted small strongyle larvae (hypobiotic cyathostomes) — unique indication',
      'Adult large and small strongyles',
      'Bots',
      'Pinworms',
      'Roundworms in foals',
    ],
    dosage: '400 mcg/kg orally as a single dose. One tube treats up to a 1,200 lb (545 kg) horse. Do not use in foals under 4 months of age or in debilitated horses. The safety margin is narrower than ivermectin.',
    forms: ['Oral gel'],
    contraindications: [
      'Foals under 4 months of age — narrow safety margin, potential for toxicity',
      'Severely debilitated or underweight horses',
      'Horses under 6 months of age (Quest Plus)',
    ],
    interactions: [
      'Other macrocyclic lactones: do not combine',
    ],
    warnings: [
      'Narrower safety margin than ivermectin — do not exceed labeled dose',
      'Overdose can cause ataxia, recumbency, and CNS signs',
      'NOT safe for foals under 4 months — use ivermectin instead in young horses',
      'Use strategically (1–2 times/year) based on FEC testing to preserve efficacy',
    ],
  },

  {
    id: 'pyrantel',
    name: 'Pyrantel Pamoate',
    brandNames: ['Strongid', 'Exodus', 'Rotectin'],
    categoryId: 'dewormers',
    rxRequired: false,
    description: 'Pyrantel pamoate is a tetrahydropyrimidine dewormer that causes spastic paralysis in susceptible nematodes. It is the drug of choice for tapeworms when given at double dose, and is safe for use in foals, pregnant mares, and debilitated horses.',
    uses: [
      'Tapeworms (Anoplocephala perfoliata) — double dose required',
      'Large strongyles (adult)',
      'Small strongyles (adult — not encysted larvae)',
      'Pinworms',
      'Roundworms in foals',
    ],
    dosage: 'Standard deworming dose: 6.6 mg/kg orally. Tapeworm dose: 13.2 mg/kg (double dose) orally. Daily low-dose feeding: 2.64 mg/kg daily mixed into feed (Strongid C). Safe for all ages including young foals.',
    forms: ['Oral paste', 'Oral liquid', 'Daily feed pellets (Strongid C)'],
    contraindications: [
      'No significant contraindications',
      'Safe in pregnant mares, foals, and debilitated horses',
    ],
    interactions: [
      'Levamisole: do not combine — same mechanism of action',
      'Organophosphates: theoretical additive neurotoxicity',
    ],
    warnings: [
      'Standard dose not effective against tapeworms — must use double dose for tapeworm treatment',
      'Some resistance documented in small strongyle populations',
    ],
  },

  {
    id: 'fenbendazole',
    name: 'Fenbendazole',
    brandNames: ['Panacur', 'Safe-Guard'],
    categoryId: 'dewormers',
    rxRequired: false,
    description: 'Fenbendazole is a benzimidazole dewormer. At standard doses it treats adult roundworms; at elevated doses over 5 consecutive days (PowerPak), it can kill some encysted cyathostome larvae. Resistance is widespread and fecal egg count reduction testing is strongly recommended.',
    uses: [
      'Large and small strongyles (adult)',
      'Ascarids / roundworms',
      'Pinworms',
      'Encysted small strongyle larvae (5-day PowerPak protocol only)',
    ],
    dosage: 'Standard: 5–7.5 mg/kg orally as a single dose. Larval cyathostominosis (PowerPak): 10 mg/kg orally once daily for 5 consecutive days. Safe in pregnant mares and foals.',
    forms: ['Oral paste', 'Oral granules', 'Oral suspension'],
    contraindications: [
      'No significant contraindications at labeled doses',
      'Confirm efficacy with FEC reduction test before relying on fenbendazole',
    ],
    interactions: [
      'No significant drug interactions',
    ],
    warnings: [
      'Widespread resistance — fecal egg count monitoring strongly recommended',
      'Not recommended as first-line dewormer unless resistance testing confirms sensitivity',
    ],
  },

  {
    id: 'praziquantel',
    name: 'Praziquantel',
    brandNames: ['Equimax (combined with ivermectin)', 'Quest Plus (combined with moxidectin)', 'Zimecterin Gold'],
    categoryId: 'dewormers',
    rxRequired: false,
    description: 'Praziquantel is the most effective treatment for equine tapeworms. It is currently only available in combination products with either ivermectin or moxidectin, providing tapeworm coverage alongside broad-spectrum nematode and bot coverage in a single dose.',
    uses: [
      'Tapeworms (Anoplocephala perfoliata, A. magna)',
      'Used in combination products for broad-spectrum coverage',
    ],
    dosage: '1–2 mg/kg as part of a combination product. Follow label directions for the combination product. Typically given once or twice yearly for tapeworm control.',
    forms: ['Oral paste (in combination products only)'],
    contraindications: [
      'No significant contraindications at labeled doses',
    ],
    interactions: [
      'No significant interactions at label doses',
    ],
    warnings: [
      'Only available in combination products in the US — no standalone equine praziquantel product',
      'Pyrantel pamoate at double dose is an alternative tapeworm treatment',
    ],
  },

  // ── CORTICOSTEROIDS ────────────────────────────────────────────────────────

  {
    id: 'dexamethasone',
    name: 'Dexamethasone',
    brandNames: ['Azium', 'Dexamethasone SP', 'Dexasone'],
    categoryId: 'corticosteroids',
    rxRequired: true,
    description: 'Dexamethasone is a potent synthetic glucocorticoid with 25 times the anti-inflammatory potency of cortisol. It is used broadly for inflammatory conditions across multiple body systems and is a key drug in the management of equine allergic and immune-mediated diseases.',
    uses: [
      'Allergic reactions and anaphylaxis support',
      'Inflammatory airway disease (heaves/equine asthma)',
      'Immune-mediated conditions (immune-mediated hemolytic anemia)',
      'Inflammatory joint disease (given IA or systemic)',
      'Spinal cord inflammation (EPM sequelae)',
      'Reduction of cerebral edema',
      'Anti-endotoxin support in severe systemic infection',
    ],
    dosage: 'Anti-inflammatory: 0.05–0.2 mg/kg IV or IM once daily. Allergic reaction: 0.1–0.2 mg/kg IV. Intra-articular (IA): 2–10 mg per joint depending on joint size. Taper dose over several days — do not stop abruptly after prolonged use.',
    forms: ['Injectable (IV or IM)', 'Oral powder', 'Intra-articular injectable'],
    contraindications: [
      'Active or suspected infections (immunosuppressive — worsens infections)',
      'Laminitis — even a single dose can trigger laminitis in susceptible horses',
      'Equine Metabolic Syndrome (EMS) or Cushings (PPID) horses — extreme laminitis risk',
      'Pregnancy in first trimester (can induce abortion)',
      'Diabetes insipidus',
    ],
    interactions: [
      'NSAIDs: combined use significantly increases GI ulcer risk',
      'Diuretics: enhanced potassium loss',
      'Insulin and glucose regulation: corticosteroids cause insulin resistance',
      'Live vaccines: immunosuppression may reduce vaccine efficacy',
    ],
    warnings: [
      'SERIOUS LAMINITIS RISK — never use in horses with EMS, PPID, or laminitis history without careful veterinary supervision',
      'Immunosuppressive — may reactivate latent infections',
      'Long-term use causes adrenal suppression — taper dose when discontinuing',
      'Can cause polydipsia/polyuria',
    ],
  },

  {
    id: 'prednisolone',
    name: 'Prednisolone',
    brandNames: ['Prednisolone', 'Solu-Delta Cortef (prednisolone sodium succinate)'],
    categoryId: 'corticosteroids',
    rxRequired: true,
    description: 'Prednisolone is the oral glucocorticoid of choice in horses (not prednisone — horses convert prednisone to prednisolone poorly). It is used for immune-mediated and inflammatory conditions requiring sustained systemic steroid therapy.',
    uses: [
      'Immune-mediated hemolytic anemia (IMHA)',
      'Immune-mediated thrombocytopenia',
      'Inflammatory airway disease / equine asthma',
      'Skin conditions (allergic dermatitis, pemphigus)',
      'Lymphoma (palliative)',
    ],
    dosage: 'Anti-inflammatory: 0.5–1 mg/kg orally once daily. Immunosuppressive: 1–2 mg/kg orally once daily. Taper slowly once clinical response is achieved. Available as tablets or oral liquid.',
    forms: ['Oral tablets', 'Oral liquid', 'Injectable (IV — prednisolone sodium succinate for emergencies)'],
    contraindications: [
      'Active systemic infections',
      'EMS or PPID horses — laminitis risk',
      'Horses with a history of laminitis',
      'Diabetes mellitus',
    ],
    interactions: [
      'NSAIDs: additive GI toxicity',
      'Diuretics: potassium loss',
      'Immunosuppressants: additive immunosuppression',
    ],
    warnings: [
      'Use prednisolone, NOT prednisone — horses cannot effectively convert prednisone to its active form',
      'Laminitis risk present with systemic use — monitor feet closely',
      'Taper dose over weeks to months — do not stop abruptly',
    ],
  },

  {
    id: 'triamcinolone',
    name: 'Triamcinolone Acetonide',
    brandNames: ['Vetalog', 'Kenalog', 'Triamcinolone'],
    categoryId: 'corticosteroids',
    rxRequired: true,
    description: 'Triamcinolone acetonide is an intermediate-acting corticosteroid most commonly used for intra-articular injections in horses. It provides potent, prolonged local anti-inflammatory effects with relatively lower risk of systemic laminitis compared to other IA steroids.',
    uses: [
      'Intra-articular injection for arthritis and joint inflammation',
      'Tendon sheath injections',
      'Bursa injections',
      'Intralesional treatment of proud flesh (exuberant granulation tissue)',
      'Systemic anti-inflammatory (less commonly)',
    ],
    dosage: 'Intra-articular: 6–18 mg per joint (6 mg small joints, 12–18 mg large joints). Systemic IM: 0.05–0.1 mg/kg once. Duration of action: approximately 3 weeks in joints.',
    forms: ['Injectable (IA, IM, intralesional)'],
    contraindications: [
      'Active joint infection (septic arthritis)',
      'EMS/PPID horses — laminitis risk',
      'Do not inject into damaged or infected joint capsule',
    ],
    interactions: [
      'NSAIDs: increased GI risk if used systemically with oral NSAIDs',
    ],
    warnings: [
      'Strict aseptic technique required for all intra-articular injections',
      'Post-injection flare possible (24–48 hours of increased joint pain and swelling — typically self-limiting)',
      'Laminitis risk lower than methylprednisolone acetate but still present',
    ],
  },

  {
    id: 'isoflupredone',
    name: 'Isoflupredone Acetate',
    brandNames: ['Predef 2X'],
    categoryId: 'corticosteroids',
    rxRequired: true,
    description: 'Isoflupredone acetate is a fluorinated corticosteroid with potent anti-inflammatory effects. It is used systemically and intra-articularly. It is associated with a higher risk of hypokalemia (low potassium) than other equine corticosteroids, which can cause muscle weakness.',
    uses: [
      'Inflammatory and allergic conditions',
      'Intra-articular joint injection',
      'Respiratory inflammatory disease',
    ],
    dosage: 'IM: 0.01–0.02 mg/kg. Intra-articular: 5–20 mg per joint. Monitor potassium levels with repeated use.',
    forms: ['Injectable (IM, IA)'],
    contraindications: [
      'Active systemic infection',
      'EMS/PPID horses',
      'Hypokalemia',
    ],
    interactions: [
      'Diuretics (furosemide): additive potassium loss — risk of severe hypokalemia',
      'NSAIDs: GI risk',
    ],
    warnings: [
      'Monitor serum potassium — can cause severe hypokalemia with muscle weakness or cardiac arrhythmias',
      'Supplement potassium if extended use required',
    ],
  },

  // ── GI & DIGESTIVE ─────────────────────────────────────────────────────────

  {
    id: 'omeprazole',
    name: 'Omeprazole',
    brandNames: ['GastroGard (treatment dose)', 'UlcerGard (prevention dose)', 'Gastrozol'],
    categoryId: 'gi',
    rxRequired: true,
    description: 'Omeprazole is a proton pump inhibitor (PPI) that suppresses gastric acid secretion by irreversibly blocking the H+/K+ ATPase enzyme in gastric parietal cells. It is the gold standard treatment for equine gastric ulcer syndrome (EGUS) and the only FDA-approved treatment for equine ulcers.',
    uses: [
      'Treatment of squamous gastric ulcers (ESGUS)',
      'Prevention of ulcers during high-risk periods (competition, transport, stall rest)',
      'Glandular gastric ulcer syndrome (EGGUS) — in combination with sucralfate',
      'NSAID-associated gastric protection',
    ],
    dosage: 'Treatment (GastroGard): 4 mg/kg orally once daily for 28 days on an empty stomach. Prevention (UlcerGard): 1 mg/kg orally once daily. Administer 30–60 minutes before feeding for best absorption. Glandular ulcers may require 90-day treatment and combination therapy.',
    forms: ['Oral paste'],
    contraindications: [
      'Known hypersensitivity to omeprazole',
      'Use with caution in horses with severe hepatic disease (reduced metabolism)',
    ],
    interactions: [
      'Ketoconazole and itraconazole: omeprazole reduces their oral bioavailability (pH-dependent absorption)',
      'Iron supplements: absorption may be reduced',
      'Clopidogrel: PPI may reduce activation of clopidogrel',
    ],
    warnings: [
      'Administer on an empty stomach (at least 30 minutes before feeding) — food reduces efficacy',
      'Generic omeprazole products vary in bioavailability — GastroGard and UlcerGard are the only FDA-approved formulations',
      'Glandular ulcers are less responsive to omeprazole alone — consult veterinarian',
    ],
  },

  {
    id: 'sucralfate',
    name: 'Sucralfate',
    brandNames: ['Carafate', 'Sucralfate'],
    categoryId: 'gi',
    rxRequired: true,
    description: 'Sucralfate is a cytoprotective agent that forms a protective coating over ulcerated gastric and intestinal mucosa. It works locally in the GI tract and is not absorbed systemically. Particularly valuable for glandular ulcers and right dorsal colitis where acid suppression alone is insufficient.',
    uses: [
      'Glandular gastric ulcers (combined with omeprazole)',
      'Right dorsal colitis (NSAID-associated)',
      'Esophageal ulceration',
      'Intestinal mucosal protection',
    ],
    dosage: '20 mg/kg orally 2–4 times daily. Give at least 2 hours apart from other oral medications — sucralfate binds to and reduces absorption of many drugs. Can be given as tablets crushed in water or slurry.',
    forms: ['Oral tablets', 'Oral suspension'],
    contraindications: [
      'Do not give concurrently with other oral medications without a 2-hour separation',
    ],
    interactions: [
      'Virtually all oral medications: sucralfate binds to and reduces absorption — administer 2 hours before or after other drugs',
      'Omeprazole: space 2 hours apart',
      'Fluoroquinolones, tetracyclines: reduced absorption if given simultaneously',
    ],
    warnings: [
      'Space all other oral medications at least 2 hours from sucralfate',
      'Best given on an empty stomach to allow coating of gastric and intestinal mucosa',
    ],
  },

  {
    id: 'misoprostol',
    name: 'Misoprostol',
    brandNames: ['Cytotec'],
    categoryId: 'gi',
    rxRequired: true,
    description: 'Misoprostol is a synthetic prostaglandin E1 analog that promotes mucosal cytoprotection by stimulating bicarbonate secretion, increasing mucosal blood flow, and enhancing mucus production. It is used for glandular gastric ulcers, particularly when omeprazole alone is insufficient.',
    uses: [
      'Glandular gastric ulcer syndrome (EGGUS)',
      'NSAID-associated gastric injury',
      'Right dorsal colitis',
    ],
    dosage: '1–5 mcg/kg orally 2–3 times daily. Typical dose: 2.5 mcg/kg orally twice daily, combined with omeprazole. Tablets can be crushed and mixed with a small amount of applesauce or carrier.',
    forms: ['Oral tablets (human formulation used off-label)'],
    contraindications: [
      'Pregnancy — can cause uterine contractions and abortion',
      'Horses with known hypersensitivity',
    ],
    interactions: [
      'Antacids containing magnesium: may worsen diarrhea side effects',
    ],
    warnings: [
      'NEVER use in pregnant mares — abortifacient',
      'May cause diarrhea and colic at higher doses — start at low end of dose range',
      'Off-label use — consult veterinarian for appropriate protocol',
    ],
  },

  {
    id: 'psyllium',
    name: 'Psyllium',
    brandNames: ['Sand Clear', 'Psyllium Husk', 'Desert Dyrty Dirt'],
    categoryId: 'gi',
    rxRequired: false,
    description: 'Psyllium is a soluble fiber supplement derived from Plantago ovata seed husks. It absorbs water in the colon, forming a gel that aids in the movement and clearance of sand and ingested debris from the large colon. Used for sand colic prevention in at-risk horses.',
    uses: [
      'Sand colic prevention in horses on sandy pasture or soil',
      'Clearance of ingested sand from the large colon',
      'General GI motility support',
    ],
    dosage: 'Prevention: 1 lb (450 g) of psyllium per 500 kg horse, given for 1 week out of every 4. Active sand clearance: same dose daily for 4–6 weeks. Mix with dampened feed or a small amount of soaked hay.',
    forms: ['Oral powder/granules'],
    contraindications: [
      'Acute esophageal obstruction (choke) — do not use until obstruction is cleared',
      'Intestinal obstruction',
    ],
    interactions: [
      'May delay absorption of oral medications given simultaneously — space 2 hours apart',
    ],
    warnings: [
      'Ensure adequate water intake — dehydration with psyllium can worsen impaction',
      'Efficacy for sand removal is variable — rectal auscultation and radiographs are more reliable for diagnosis',
    ],
  },

  {
    id: 'mineraloil',
    name: 'Mineral Oil',
    brandNames: ['Mineral Oil', 'Neoloid'],
    categoryId: 'gi',
    rxRequired: false,
    description: 'Mineral oil is a lubricant laxative used for impaction colic. Administered via nasogastric (NG) tube by a veterinarian, it lubricates the GI contents and softens impacted fecal material to facilitate passage. It is also useful as a diagnostic tool — appearance in the feces confirms GI transit.',
    uses: [
      'Impaction colic — lubrication and softening of large colon impactions',
      'Diagnostic marker for GI transit time',
      'Prevention of further impaction during medical colic management',
    ],
    dosage: '1–4 liters (2–8 pints) per adult horse via nasogastric tube, once or twice daily as directed by a veterinarian. Do not administer orally — aspiration risk if given without NG tube.',
    forms: ['Liquid (via nasogastric tube only)'],
    contraindications: [
      'Do NOT administer orally without a nasogastric tube — aspiration into lungs causes fatal lipid pneumonia',
      'Horses with suspected intestinal rupture',
      'Horses with esophageal obstruction (choke)',
    ],
    interactions: [
      'Fat-soluble vitamins (A, D, E, K): long-term use may reduce absorption',
    ],
    warnings: [
      'MUST BE ADMINISTERED VIA NASOGASTRIC TUBE BY A VETERINARIAN — never drenched orally',
      'Call your veterinarian — colic cases require professional evaluation before treatment',
      'Not effective for large colon torsion, right dorsal displacement, or surgical colics',
    ],
  },

  // ── REPRODUCTIVE ───────────────────────────────────────────────────────────

  {
    id: 'regumate',
    name: 'Altrenogest',
    brandNames: ['Regu-Mate', 'Altrenogest', 'ReguMare'],
    categoryId: 'reproductive',
    rxRequired: true,
    description: 'Altrenogest is a synthetic progestogen used to suppress estrus, maintain pregnancy in mares prone to early embryonic loss, and synchronize estrous cycles in breeding programs. It is the most commonly used reproductive hormone in equine practice.',
    uses: [
      'Suppression of estrus for behavioral management or competition',
      'Pregnancy maintenance in mares with low progesterone or history of early embryonic loss',
      'Estrous synchronization in breeding programs',
      'Transition into breeding season',
    ],
    dosage: '0.044 mg/kg orally once daily. For a 500 kg mare: 22 mg (approximately 10 mL of 0.22% solution) daily in feed or directly on grain. Duration varies: behavioral suppression throughout season; pregnancy support typically to day 100–120 of gestation.',
    forms: ['Oral solution (administered on feed)'],
    contraindications: [
      'Mares with active uterine infection',
      'Mares intended for embryo transfer (ongoing treatment complicates timing)',
    ],
    interactions: [
      'No significant drug interactions',
    ],
    warnings: [
      '⚠️ EXTREME HUMAN HAZARD — readily absorbed through human skin; wear chemical-resistant gloves and protective clothing at all times',
      'In humans: causes disruption of menstrual cycles, can maintain unwanted pregnancy, masculinizing effects with prolonged exposure',
      'Keep away from women of childbearing age',
      'Do not handle without gloves — even brief skin contact is dangerous',
      'If skin exposure occurs, wash with soap and water immediately and seek medical advice',
    ],
  },

  {
    id: 'oxytocin',
    name: 'Oxytocin',
    brandNames: ['Pitocin', 'Oxytocin'],
    categoryId: 'reproductive',
    rxRequired: true,
    description: 'Oxytocin is a hormone that stimulates uterine contractions. In equine medicine it is used to assist delivery, promote uterine involution post-foaling, facilitate milk let-down, and stimulate uterine clearance of fluid and debris in mares with endometritis.',
    uses: [
      'Induction or augmentation of parturition (foaling)',
      'Uterine clearance post-breeding in susceptible mares (PMSM)',
      'Promotion of uterine involution after foaling',
      'Milk let-down facilitation in mares with agalactia',
      'Treatment of retained fetal membranes (placenta)',
    ],
    dosage: 'Uterine clearance/post-breeding: 10–20 IU IM or IV slowly every 4–6 hours. Foaling induction: 2.5–10 IU IV slowly, repeated every 20–30 minutes under veterinary supervision. Retained placenta: 20 IU IM every 2–4 hours.',
    forms: ['Injectable (IV or IM)'],
    contraindications: [
      'Do not use for foaling induction unless mare is fully ready (cervix dilated, foal in correct position)',
      'Fetal malpresentation — may cause uterine rupture if foal is not correctly positioned',
      'Horses with cardiovascular disease (can cause hypotension)',
    ],
    interactions: [
      'Prostaglandins: combined use increases uterine contraction intensity',
      'Vasoconstrictors: oxytocin potentiates vasoconstriction',
    ],
    warnings: [
      'Foaling induction must only be performed by or under direct veterinary supervision',
      'Premature or incorrectly timed induction results in a high rate of foal death and maternal complications',
      'Rapid IV administration causes hypotension — always administer IV slowly',
    ],
  },

  {
    id: 'lutalyse',
    name: 'Dinoprost Tromethamine',
    brandNames: ['Lutalyse', 'Prostin F2α'],
    categoryId: 'reproductive',
    rxRequired: true,
    description: 'Dinoprost is a natural prostaglandin F2α analog that causes luteolysis (destruction of the corpus luteum), which terminates the progesterone phase and brings mares into estrus within 2–5 days. It is used extensively in breeding management to control and synchronize estrous cycles.',
    uses: [
      'Estrous synchronization — bring mares into heat on a predictable schedule',
      'Termination of diestrus (shortening inter-estrous interval)',
      'Treatment of persistent corpus luteum',
      'Termination of unwanted pregnancy (before day 35)',
      'Pyometra treatment',
    ],
    dosage: '5 mg (1 mL) IM as a single injection. Repeat in 14 days if no response. Expect estrus within 2–5 days of administration. Most effective between days 5–14 of the estrous cycle.',
    forms: ['Injectable (IM only)'],
    contraindications: [
      'Pregnant mares — causes abortion at any stage of pregnancy',
      'Mares with respiratory disease (bronchospasm risk)',
      'Mares with active cardiac disease',
    ],
    interactions: [
      'Oxytocin: additive uterine contractions',
      'NSAIDs: may reduce prostaglandin effects',
    ],
    warnings: [
      '⚠️ ABORTIFACIENT — will terminate pregnancy at any stage',
      '⚠️ Dangerous to humans with respiratory disease (asthma) — absorbed through skin; wear gloves',
      'Pregnant women should not handle this product',
      'Bronchospasm and abdominal cramping reported in humans after skin exposure',
    ],
  },

  {
    id: 'hcg',
    name: 'Human Chorionic Gonadotropin (hCG)',
    brandNames: ['Chorulon', 'hCG', 'Pregnyl'],
    categoryId: 'reproductive',
    rxRequired: true,
    description: 'hCG is a luteinizing hormone (LH) analog that triggers ovulation in mares. It is given when a follicle of sufficient size (35+ mm) is detected on ultrasound, causing ovulation within 36–48 hours. Used to predict and time ovulation for artificial insemination or live cover.',
    uses: [
      'Ovulation induction to time breeding',
      'Used with ultrasound-guided breeding management to maximize conception rates',
    ],
    dosage: '1,500–2,500 IU IV or IM as a single injection when dominant follicle reaches ≥35 mm. Ovulation expected within 36–48 hours. Use in conjunction with transrectal ultrasound monitoring.',
    forms: ['Injectable (IV or IM)'],
    contraindications: [
      'Mares without a follicle of adequate size (≥35 mm)',
      'Repeated use in same breeding season may cause antibody formation and reduced efficacy',
    ],
    interactions: [
      'Deslorelin (Ovuplant): same indication — do not combine',
    ],
    warnings: [
      'Repeated use in the same mare over multiple seasons can lead to antibody formation, reducing efficacy',
      'Deslorelin implants (Ovuplant) may be preferred for repeated use due to lower antibody development',
    ],
  },

  // ── EMERGENCY ──────────────────────────────────────────────────────────────

  {
    id: 'epinephrine',
    name: 'Epinephrine',
    brandNames: ['Adrenalin', 'Epinephrine'],
    categoryId: 'emergency',
    rxRequired: true,
    description: 'Epinephrine (adrenalin) is the drug of first choice for anaphylaxis and cardiac arrest. It stimulates alpha and beta adrenergic receptors to increase heart rate, cardiac output, and peripheral vasoconstriction, and causes bronchodilation to relieve severe anaphylactic reactions.',
    uses: [
      'Anaphylaxis — first-line emergency treatment',
      'Cardiac arrest (cardiopulmonary resuscitation)',
      'Severe allergic reactions to vaccines, medications, or insect stings',
      'Bronchospasm in respiratory emergencies',
    ],
    dosage: 'Anaphylaxis: 0.01–0.02 mg/kg IV or IM (1:1000 solution). Cardiac arrest: 0.01–0.02 mg/kg IV. For a 500 kg horse: 5–10 mL of 1:1000 epinephrine IM or IV. Repeat every 3–5 minutes if no response.',
    forms: ['Injectable (IV, IM — 1:1000 solution)'],
    contraindications: [
      'Use with extreme caution in horses with cardiac arrhythmias',
      'Do not use with xylazine or other alpha-2 agonists — risk of fatal ventricular arrhythmias',
    ],
    interactions: [
      'Alpha-2 agonists (xylazine, detomidine): can trigger fatal ventricular arrhythmias — do not use concurrently',
      'Halothane anesthesia: sensitizes myocardium — increased arrhythmia risk',
      'Beta-blockers: antagonize cardiovascular effects',
    ],
    warnings: [
      'Only administer in life-threatening emergencies',
      'Do NOT use IV rapidly — dilute and administer slowly or use IM',
      'Never use with xylazine or other alpha-2 agonists without understanding the serious arrhythmia risk',
      'Have veterinarian on-site or on immediate call for any anaphylactic emergency',
    ],
  },

  {
    id: 'furosemide',
    name: 'Furosemide',
    brandNames: ['Lasix', 'Salix', 'Furosemide'],
    categoryId: 'emergency',
    rxRequired: true,
    description: 'Furosemide is a potent loop diuretic that inhibits sodium and chloride reabsorption in the loop of Henle, causing rapid and significant fluid excretion. In horses it is widely used to prevent exercise-induced pulmonary hemorrhage (EIPH) in racehorses and for management of edema and fluid overload.',
    uses: [
      'Exercise-induced pulmonary hemorrhage (EIPH) prevention — "bleeders"',
      'Acute pulmonary edema',
      'Edema management (limb edema, ventral edema)',
      'Acute heart failure',
      'Oliguria in critical patients to stimulate urine production',
    ],
    dosage: 'EIPH prevention: 250 mg (500 mL of 0.5% solution) IV 4 hours before racing (regulated by racing jurisdiction). Edema: 0.5–1 mg/kg IV or IM once or twice daily. Monitor electrolytes with repeated use.',
    forms: ['Injectable (IV or IM)'],
    contraindications: [
      'Dehydrated or hypovolemic horses — will worsen fluid deficit',
      'Pre-existing severe electrolyte imbalances (hypokalemia, hyponatremia)',
      'Concurrent gentamicin or aminoglycoside use without careful monitoring',
    ],
    interactions: [
      'Aminoglycosides (gentamicin): additive nephrotoxicity and ototoxicity',
      'Corticosteroids: additive potassium loss',
      'NSAIDs: may reduce diuretic efficacy and increase nephrotoxic risk',
      'Digoxin: hypokalemia caused by furosemide increases digoxin toxicity risk',
    ],
    warnings: [
      'Monitor electrolytes (especially potassium and sodium) with repeated dosing',
      'Can cause dehydration and electrolyte depletion — ensure adequate water access',
      'Competition withdrawal times vary by jurisdiction — check racing rules',
      'Aggressive use in sick horses can cause hemodynamic compromise',
    ],
  },

  {
    id: 'atropine',
    name: 'Atropine',
    brandNames: ['Atropine Sulfate'],
    categoryId: 'emergency',
    rxRequired: true,
    description: 'Atropine is an anticholinergic agent that blocks muscarinic acetylcholine receptors. In equine medicine it is used to treat bradycardia (dangerously slow heart rate), as a pre-anesthetic agent to reduce bronchial secretions, and as an antidote for organophosphate toxicity.',
    uses: [
      'Bradycardia and AV block during anesthesia or sedation',
      'Organophosphate and carbamate toxicity antidote',
      'Pre-anesthetic medication to reduce salivation and bronchial secretions',
      'Ophthalmic use for pupil dilation and uveitis management',
    ],
    dosage: 'Bradycardia: 0.01–0.02 mg/kg IV. Organophosphate toxicity: 0.05–0.1 mg/kg IV, repeated until secretions dry up. Ophthalmic: 1% solution, 1–2 drops per eye 1–4 times daily.',
    forms: ['Injectable (IV)', 'Ophthalmic solution'],
    contraindications: [
      'Tachycardia or atrial fibrillation (will worsen heart rate)',
      'Glaucoma (ophthalmic use contraindicated)',
      'GI motility conditions — atropine causes ileus; use with caution in colic cases',
    ],
    interactions: [
      'Antihistamines and tricyclic antidepressants: additive anticholinergic effects',
      'Phenothiazines (acepromazine): additive anticholinergic effects',
    ],
    warnings: [
      'Causes GI hypomotility — monitor for colic/ileus, especially with repeated dosing',
      'For organophosphate toxicity, dose to effect (drying of secretions) — not by body weight alone',
      'Ophthalmic atropine causes prolonged mydriasis (dilated pupil) in horses — up to 2 weeks',
    ],
  },

  {
    id: 'calcium',
    name: 'Calcium Gluconate',
    brandNames: ['Calcium Gluconate', 'Cal-Dextro'],
    categoryId: 'emergency',
    rxRequired: true,
    description: 'Calcium gluconate is the treatment of choice for hypocalcemia (low blood calcium) in horses, most commonly seen as synchronous diaphragmatic flutter ("thumps") in endurance horses and lactation tetany in mares. It also serves as an antidote for certain toxicities.',
    uses: [
      'Hypocalcemia ("thumps" in endurance horses)',
      'Lactation tetany (hypocalcemia in lactating mares)',
      'Eclampsia post-foaling',
      'Adjunct in some toxicoses (oxalate, ethylene glycol)',
    ],
    dosage: '100–500 mL of 23% calcium gluconate solution added to 1 liter of saline or dextrose, infused slowly IV over 15–30 minutes. Monitor heart rate throughout infusion — stop or slow if bradycardia develops. Repeat as needed based on response.',
    forms: ['Injectable (IV — MUST be diluted and given slowly)'],
    contraindications: [
      'Hypercalcemia',
      'Horses receiving digoxin — calcium potentiates digoxin toxicity',
      'Do not give undiluted or rapidly IV',
    ],
    interactions: [
      'Digoxin: enhanced toxicity — contraindicated with concurrent digoxin',
      'Furosemide: promotes calcium excretion',
      'Corticosteroids: promote calcium loss',
    ],
    warnings: [
      'MUST be diluted and given slowly — rapid IV administration causes fatal cardiac arrhythmias',
      'Monitor heart rate continuously during infusion',
      'If heart rate drops or arrhythmias develop, stop infusion immediately',
    ],
  },

  // ── JOINT & LAMENESS ───────────────────────────────────────────────────────

  {
    id: 'adequan',
    name: 'Polysulfated Glycosaminoglycan (PSGAG)',
    brandNames: ['Adequan'],
    categoryId: 'joint',
    rxRequired: true,
    description: 'Adequan is a disease-modifying osteoarthritis drug (DMOAD) that inhibits degradative enzymes in joint fluid, stimulates synovial fluid production, and promotes cartilage repair. Unlike corticosteroids, it is a joint-protective rather than merely anti-inflammatory drug.',
    uses: [
      'Osteoarthritis and degenerative joint disease',
      'Traumatic joint injuries',
      'Synovitis and capsulitis',
      'Prevention of joint deterioration in performance horses',
      'Post-surgical joint rehabilitation',
    ],
    dosage: 'IM: 500 mg IM every 4 days for 7 injections (one treatment course). IA: 250 mg per joint. Maintenance: monthly IM injections or as recommended by veterinarian. IM route preferred for systemic joint support.',
    forms: ['Injectable (IM or IA)'],
    contraindications: [
      'Active joint infection (septic arthritis) — do not inject intra-articularly',
      'Blood clotting disorders — PSGAG has mild anti-coagulant properties',
    ],
    interactions: [
      'Anticoagulants: additive anticoagulant effect — use with caution',
    ],
    warnings: [
      'IA injections require strict aseptic technique',
      'Mild anti-coagulant effect — allow adequate time before surgical procedures',
    ],
  },

  {
    id: 'legend',
    name: 'Hyaluronic Acid (Sodium Hyaluronate)',
    brandNames: ['Legend (IV)', 'Hyalovet (IA)', 'Hylartil (IA)'],
    categoryId: 'joint',
    rxRequired: true,
    description: 'Hyaluronic acid (HA) is a natural component of joint fluid that lubricates and cushions joints. Exogenous HA reduces inflammation, improves joint fluid viscosity, and provides a structural scaffold for joint repair. Available as an IV product (Legend) for systemic joint effects or directly into joints.',
    uses: [
      'Synovitis and joint inflammation',
      'Osteoarthritis management',
      'Intra-articular joint supplementation post-injury or post-surgery',
      'IV use (Legend) for systemic joint support in performance horses',
    ],
    dosage: 'IV (Legend): 40 mg IV weekly for 3 weeks, then as needed. IA: 20 mg per joint, repeated at 2–4 week intervals. Can be combined with corticosteroids for intra-articular injections.',
    forms: ['Injectable (IV or IA)'],
    contraindications: [
      'Active joint infection for IA use',
    ],
    interactions: [
      'Corticosteroids: commonly combined IA — synergistic anti-inflammatory effect',
    ],
    warnings: [
      'IV Legend: administer slowly; rare anaphylactic-type reactions reported',
      'IA injections require strict aseptic technique',
    ],
  },

  {
    id: 'depomedrol',
    name: 'Methylprednisolone Acetate',
    brandNames: ['Depo-Medrol'],
    categoryId: 'joint',
    rxRequired: true,
    description: 'Methylprednisolone acetate is a long-acting depot corticosteroid used primarily for intra-articular injection. It provides prolonged (4–8 week) local anti-inflammatory effects in arthritic joints. It is highly effective but carries a higher risk of cartilage damage and laminitis compared to other IA steroids.',
    uses: [
      'Intra-articular injection for osteoarthritis',
      'Low-motion joints (coffin joint, distal hock joints)',
      'Tendon sheath injections',
    ],
    dosage: 'IA: 40–200 mg per joint depending on joint size. Low-motion joints (coffin, distal tarsal): 40–80 mg. High-motion joints (fetlock, carpus): use with caution; prefer triamcinolone for high-motion joints.',
    forms: ['Injectable (IA only)'],
    contraindications: [
      'Active joint infection',
      'High-motion joints where cartilage integrity is critical',
      'EMS/PPID horses — highest laminitis risk of all IA steroids',
    ],
    interactions: [
      'NSAIDs: increased GI risk if systemic levels accumulate',
    ],
    warnings: [
      'Associated with highest laminitis risk of all commonly used IA corticosteroids',
      'Can cause cartilage degeneration with repeated or high-dose use in high-motion joints',
      'Strictly limit use in EMS and PPID horses',
      'Strict aseptic injection technique required',
    ],
  },

  {
    id: 'betamethasone',
    name: 'Betamethasone',
    brandNames: ['Betavet', 'Celestone', 'Betamethasone'],
    categoryId: 'joint',
    rxRequired: true,
    description: 'Betamethasone is a synthetic corticosteroid used for intra-articular injection, particularly in sport horses. It has a more favorable cartilage safety profile than methylprednisolone acetate and is increasingly preferred for high-motion joints in competition horses.',
    uses: [
      'Intra-articular injection for synovitis and osteoarthritis',
      'High-motion joints (fetlock, carpus, stifle)',
      'Tendon sheaths and bursae',
    ],
    dosage: 'IA: 6–18 mg per joint. Often combined with hyaluronic acid for joint injections in sport horses. Duration approximately 3–4 weeks.',
    forms: ['Injectable (IA)'],
    contraindications: [
      'Active joint infection',
      'EMS/PPID horses — laminitis risk',
    ],
    interactions: [
      'Hyaluronic acid: synergistic when combined IA',
    ],
    warnings: [
      'Laminitis risk lower than methylprednisolone but not absent — monitor feet post-injection',
      'Strict aseptic technique required',
      'Competition withdrawal times apply — check with governing body',
    ],
  },

  // ── MUSCLE & NEUROLOGICAL ──────────────────────────────────────────────────

  {
    id: 'methocarbamol',
    name: 'Methocarbamol',
    brandNames: ['Robaxin-V', 'Methocarbamol'],
    categoryId: 'muscle',
    rxRequired: true,
    description: 'Methocarbamol is a central-acting muscle relaxant that reduces skeletal muscle spasm through CNS depression. It is the primary treatment for exertional rhabdomyolysis (tying-up) and tetanus in horses.',
    uses: [
      'Exertional rhabdomyolysis ("tying-up") — reduces muscle spasm and pain',
      'Tetanus — reduces muscle rigidity',
      'Strychnine toxicity',
      'Intervertebral disk disease with muscle spasm',
    ],
    dosage: '4.4–22 mg/kg IV slowly (maximum 14 mL/min injection rate). For tying-up: 4.4–8.8 mg/kg IV to effect. For tetanus: 22 mg/kg IV slowly. Repeat every 6–8 hours as needed.',
    forms: ['Injectable (IV — must not be given IM or SC)'],
    contraindications: [
      'Known hypersensitivity',
      'Renal disease (contains polyethylene glycol which is nephrotoxic in high doses)',
      'Do not administer IM or subcutaneously — irritating to tissues',
    ],
    interactions: [
      'CNS depressants (sedatives, anesthetics): additive CNS depression',
    ],
    warnings: [
      'Administer IV slowly — rapid administration causes salivation, CNS excitement, and seizures',
      'IV only — do not administer IM',
      'Causes sedation — monitor for ataxia and recumbency',
    ],
  },

  {
    id: 'diazepam',
    name: 'Diazepam',
    brandNames: ['Valium', 'Diazepam'],
    categoryId: 'muscle',
    rxRequired: true,
    description: 'Diazepam is a benzodiazepine used for sedation, seizure control, and muscle relaxation in horses. It enhances GABA inhibitory neurotransmission. In neonatal foals it is used for seizure management; in adults it is primarily combined with ketamine for induction of anesthesia.',
    uses: [
      'Seizure control in neonatal foals',
      'Anesthesia induction (combined with ketamine)',
      'Muscle relaxation during recumbent procedures',
      'Status epilepticus management',
    ],
    dosage: 'Foal seizures: 0.05–0.1 mg/kg IV slowly, can repeat every 5–10 minutes. Adult anesthesia (with ketamine): 0.05 mg/kg IV immediately before ketamine induction. Anti-anxiety/muscle relaxation: 0.01–0.05 mg/kg IV.',
    forms: ['Injectable (IV — use only the vegetable oil formulation; aqueous formulation incompatible with many IV solutions)'],
    contraindications: [
      'Horses without IV access (unpredictable absorption by other routes)',
      'Respiratory depression risk — have reversal agent (flumazenil) available',
    ],
    interactions: [
      'CNS depressants: additive — use reduced doses when combining with ketamine, xylazine, or opioids',
      'Flumazenil: specific benzodiazepine reversal agent',
    ],
    warnings: [
      'Controlled substance — DEA Schedule IV',
      'Can cause respiratory depression and hypotension',
      'Do not mix with water-based solutions in the same syringe (precipitates)',
    ],
  },

  {
    id: 'dantrolene',
    name: 'Dantrolene',
    brandNames: ['Dantrium'],
    categoryId: 'muscle',
    rxRequired: true,
    description: 'Dantrolene is a skeletal muscle relaxant that acts directly on the ryanodine receptor in muscle cells to reduce intracellular calcium release. It is used for prevention and treatment of recurrent exertional rhabdomyolysis (RER) — a genetic muscle condition common in Thoroughbreds and Warmbloods.',
    uses: [
      'Recurrent exertional rhabdomyolysis (RER) — prevention',
      'Malignant hyperthermia (rare in horses)',
      'Adjunct treatment for severe tying-up episodes',
    ],
    dosage: 'Prevention: 4 mg/kg orally 60–90 minutes before exercise on high-risk days. Treatment: 2–4 mg/kg IV slowly in an emergency setting. Oral capsules may be compounded into paste for easier administration.',
    forms: ['Oral capsules (compounded paste)', 'Injectable (IV — emergency)'],
    contraindications: [
      'Severe hepatic disease — hepatotoxic with long-term use',
    ],
    interactions: [
      'Calcium channel blockers: risk of cardiovascular depression when combined IV',
      'Other muscle relaxants: additive effect',
    ],
    warnings: [
      'Long-term oral use can cause hepatotoxicity — monitor liver enzymes periodically',
      'Oral administration requires compounding or gelatin capsule administration',
      'IV use only for emergency settings — administered slowly',
    ],
  },
]
