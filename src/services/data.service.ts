
import { Injectable } from '@angular/core';
import { Category } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private categories: Category[] = [
    {
      name: 'Cardiology',
      topics: [
        {
          id: 1,
          title: 'Inferior STEMI with RV Involvement',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> An inferior wall ST-elevation myocardial infarction (STEMI) results from occlusion of the Right Coronary Artery (RCA) or, less commonly, the left circumflex artery. The RCA supplies the inferior wall of the left ventricle, the posterior septum, and crucially, the right ventricle (RV). </p>
            <p><strong>Hemodynamic Basis:</strong> RV infarction leads to RV dysfunction and failure. The RV becomes stiff, dilated, and unable to effectively pump blood forward into the pulmonary circulation. This reduces preload to the left ventricle (LV), causing a significant drop in cardiac output and leading to hypotension and cardiogenic shock. These patients are highly <strong>preload-dependent</strong> and afterload-sensitive.</p>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Aspirin:</strong> 324mg PO, chewed. Foundation of antiplatelet therapy.</li>
              <li><strong>Antiplatelet (P2Y12 inhibitor):</strong> Ticagrelor (Brilinta) 180mg load is preferred in most STEMI cases (PLATO trial). Clopidogrel 600mg load if Ticagrelor is contraindicated.</li>
              <li><strong>Anticoagulation:</strong> Heparin bolus (60 units/kg, max 4000) followed by infusion (12 units/kg/hr, max 1000).</li>
              <li><strong>Fluid Resuscitation:</strong> <strong>CRITICAL.</strong> Give 500mL IV fluid boluses cautiously, reassessing lung sounds and hemodynamics frequently. The goal is to optimize RV preload.</li>
              <li><strong>Vasopressors:</strong> If fluids are insufficient, use Norepinephrine to improve perfusion pressure. If profound cardiogenic shock, Dobutamine (for inotropy) may be added, but often requires specialist consultation and can worsen hypotension. An intra-aortic balloon pump (IABP) may be considered by cardiology.</li>
              <li><strong>CAUTION:</strong> <strong>AVOID nitrates, morphine, and beta-blockers.</strong> These drugs reduce preload and can cause precipitous hypotension and cardiovascular collapse.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Recognize inferior STEMI on 12-lead ECG (ST elevation in II, III, aVF).</li>
                <li><strong>Immediately obtain a right-sided ECG (V4R).</strong> ST elevation >1mm in V4R is highly specific for RV involvement.</li>
                <li>Activate the cath lab immediately. Time is muscle.</li>
                <li>Airway/Circulation Priority: Secure two large-bore IVs. Manage circulation first. The primary problem is hemodynamic, not respiratory. Avoid intubation if possible, as positive pressure ventilation decreases preload and can worsen shock.</li>
                <li>Risk Stratification: Patients with RV involvement, hypotension, clear lungs, and JVD are at high risk for cardiogenic shock.</li>
                <li>Activate Specialty Services: Immediate cardiology consultation for emergent PCI. Consider early discussion with cardiothoracic surgery if mechanical complications are suspected.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This is a [age]-year-old male/female presenting with chest pain. The ECG shows an inferior STEMI with ST elevation in leads II, III, and aVF. Given the concern for right ventricular involvement, I obtained a right-sided ECG which shows ST elevation in V4R, confirming an RV infarct.</p>
            <p>My immediate priorities are hemodynamic stabilization and emergent reperfusion. I have activated the cath lab. I have administered Aspirin and Ticagrelor. I am providing judicious IV fluid boluses to optimize preload and have initiated a norepinephrine infusion for persistent hypotension. I am avoiding all preload-reducing agents such as nitrates, morphine, and beta-blockers. The patient is en route to the cath lab now."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Cath lab -> CCU. These patients are never appropriate for the floor or discharge.</li>
              <li><strong>Disposition Triggers:</strong> ECG findings and hemodynamic instability.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Giving nitrates/morphine leading to cardiovascular collapse.</li>
                  <li>Delaying cath lab activation.</li>
                  <li>Failing to obtain a right-sided ECG.</li>
                  <li>Intubating a patient who is hypotensive solely due to RV failure without first optimizing hemodynamics.</li>
                </ul>
              </li>
              <li><strong>Red-flag Physiology:</strong> The triad of hypotension, clear lungs, and jugular venous distention (JVD) in the setting of an inferior STEMI is pathognomonic for RV infarction.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Patients may present with epigastric pain, nausea, or vomiting, mimicking a GI issue. Weakness, syncope, or dizziness can be the primary complaint due to low cardiac output.</p>
            <p><strong>Pattern Recognition:</strong> Any patient with bradycardia and hypotension should raise suspicion for an inferior MI, as the RCA often supplies the SA and AV nodes.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient with an inferior STEMI, I will force myself to ask: "Have I ruled out RV involvement?" and "Is there any contraindication to preload reduction?" This prevents the automatic administration of standard "MONA" therapy which can be harmful here.</p>
          `
        },
        {
          id: 2,
          title: 'Aortic Dissection',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> A tear in the aortic intima allows blood to surge into the media, creating a false lumen that propagates along the length of the aorta. This is driven by arterial shear stress.</p>
            <p><strong>Classification:</strong>
              <ul>
                <li><strong>Stanford Type A:</strong> Involves the ascending aorta. A surgical emergency due to risk of rupture into the pericardium (tamponade), coronary artery occlusion (MI), or aortic valve disruption (acute aortic regurgitation).</li>
                <li><strong>Stanford Type B:</strong> Involves only the descending aorta (distal to the left subclavian artery). Typically managed medically unless there is malperfusion or rupture.</li>
              </ul>
            </p>
            <p><strong>Hemodynamic Basis:</strong> Hypertension is both a primary risk factor and a driver of propagation. The force of left ventricular ejection (dP/dt) and the blood pressure itself extend the dissection. Malperfusion to branch vessels (carotids, renals, mesenterics, limb arteries) causes ischemic end-organ damage.</p>
          `,
          drugsAndEvidence: `
            <p>The management goal is to reduce aortic wall stress by lowering heart rate (dP/dt) and blood pressure.</p>
            <ul>
              <li><strong>Heart Rate Control FIRST:</strong> Use a short-acting IV beta-blocker.
                <ul>
                  <li><strong>Esmolol:</strong> Load 500 mcg/kg over 1 minute, then infuse at 50 mcg/kg/min. Titrate up every 4 minutes. Ideal due to its short half-life.</li>
                  <li><strong>Labetalol:</strong> IV push 20mg, then 40mg, then 80mg every 10 minutes (max 300mg total). Can also be run as an infusion.</li>
                </ul>
                <strong>Target Heart Rate: < 60 bpm.</strong>
              </li>
              <li><strong>Blood Pressure Control SECOND:</strong> After the heart rate is controlled, add a vasodilator.
                <ul>
                  <li><strong>Nicardipine:</strong> Infusion starting at 5 mg/hr, titrate up by 2.5 mg/hr every 5-15 minutes.</li>
                  <li><strong>Nitroprusside:</strong> (Less favored due to reflex tachycardia and cyanide toxicity risk). Infusion 0.3-0.5 mcg/kg/min.</li>
                </ul>
                <strong>Target Systolic Blood Pressure: 100-120 mmHg.</strong>
              </li>
              <li><strong>Analgesia:</strong> Fentanyl or Morphine for pain control, which also helps reduce sympathetic drive.</li>
              <li><strong>Evidence:</strong> Management principles are based on hemodynamic principles and case series; large RCTs are not feasible. The IRAD (International Registry of Acute Aortic Dissection) provides the largest observational data set guiding management.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>High index of suspicion in patients with severe, tearing/ripping chest or back pain, especially with hypertension and risk factors (Marfan, Ehlers-Danlos).</li>
                <li>Look for pulse deficits, new aortic regurgitation murmur, or focal neurologic deficits.</li>
                <li>Immediate portable chest x-ray looking for a widened mediastinum (>8cm), but a normal CXR does NOT rule out dissection.</li>
                <li><strong>Definitive Diagnosis:</strong> CT Angiography of the chest, abdomen, and pelvis is the gold standard imaging modality.</li>
                <li>Once diagnosed, immediately initiate anti-impulse therapy (HR control then BP control).</li>
                <li>Activate Specialty Services: Immediate Cardiothoracic Surgery consultation for ANY Type A dissection. Vascular surgery consultation for complicated Type B dissections.</li>
              </ol>
            </p>
            <p><strong>Medical Scores:</strong> The Aortic Dissection Detection Risk Score (ADD-RS) can help risk stratify, but clinical suspicion remains paramount.</p>
          `,
          verbalBoardScript: `
            <p>"I have a high suspicion for aortic dissection in this patient with tearing chest pain and hypertension. My immediate priorities are to confirm the diagnosis and initiate anti-impulse therapy to prevent propagation and rupture. I have ordered an emergent CTA of the chest, abdomen, and pelvis.</p>
            <p>Simultaneously, I have initiated an esmolol infusion to get the heart rate below 60, and once achieved, I will add a nicardipine drip to target a systolic blood pressure of 100-120. I have already consulted cardiothoracic surgery to be on standby pending imaging results. If this is a Type A dissection, the patient will go directly to the operating room."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Type A -> Operating Room. Type B (uncomplicated) -> ICU for medical management. Complicated Type B -> OR/Hybrid suite for TEVAR.</li>
              <li><strong>Disposition Triggers:</strong> Imaging confirmation and classification. Presence of malperfusion or rupture.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Giving thrombolytics for a misdiagnosed "STEMI" (can be fatal). Dissection can involve coronaries causing ST elevation.</li>
                  <li>Delaying imaging for a stable patient with high suspicion.</li>
                  <li>Failing to control HR *before* BP (vasodilators alone cause reflex tachycardia, increasing shear stress).</li>
                  <li>Missing the diagnosis in a patient with syncope, stroke, or limb ischemia as their primary symptom.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Can present as a stroke (carotid involvement), acute limb ischemia (iliac/femoral involvement), mesenteric ischemia (SMA involvement), or acute renal failure (renal artery involvement). Syncope is a red flag for pericardial tamponade.</p>
            <p><strong>Pattern Recognition:</strong> A "great masquerader." Think of dissection in any patient with pain and a perfusion deficit (pain + pulse deficit, pain + stroke, pain + MI).</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient presenting with chest pain and a neurological symptom, I will force myself to consider aortic dissection before anchoring on a primary neurologic or cardiac diagnosis. I will check bilateral blood pressures and palpate all major pulses.</p>
          `
        },
        {
          id: 3,
          title: 'Atrial Fibrillation with RVR including WPW',
          pathophysiology: `
            <p><strong>AFib with RVR (AV-node dependent):</strong> Multiple chaotic atrial impulses bombard the AV node. The AV node acts as a filter, but in RVR (Rapid Ventricular Response), enough impulses conduct to cause a rapid, irregular ventricular rate (>100 bpm). This reduces diastolic filling time, decreases cardiac output, and can lead to hypotension or heart failure.</p>
            <p><strong>AFib with WPW (Wolff-Parkinson-White):</strong> In WPW, an accessory pathway (Bundle of Kent) exists that bypasses the AV node. During AFib, atrial impulses can conduct rapidly down this pathway without the filtering effect of the AV node. This can result in extremely rapid ventricular rates (>250-300 bpm), which can degenerate into ventricular fibrillation and sudden cardiac death. The EKG shows an irregularly irregular wide-complex tachycardia.</p>
          `,
          drugsAndEvidence: `
            <p><strong>Standard AFib with RVR (Stable):</strong>
              <ul>
                <li><strong>Rate Control:</strong> Goal is HR < 110 bpm.
                  <ul>
                    <li><strong>Diltiazem:</strong> 0.25 mg/kg (max 25mg) IV over 2 min. May re-bolus with 0.35 mg/kg. Start infusion at 5-15 mg/hr.</li>
                    <li><strong>Metoprolol:</strong> 5mg IV every 5 minutes, up to 3 doses.</li>
                  </ul>
                </li>
                <li><strong>Rhythm Control (Cardioversion):</strong> Consider in new-onset AFib, symptomatic patients, or if rate control fails. Must consider stroke risk (CHADS2-VASC) and need for anticoagulation. If duration >48h or unknown, TEE should precede cardioversion.</li>
              </ul>
            </p>
            <p><strong>Unstable AFib with RVR:</strong>
              <ul>
                <li><strong>Synchronized Cardioversion:</strong> Start at 100-200 J (biphasic). Provide sedation if possible.</li>
              </ul>
            </p>
            <p><strong>AFib with WPW:</strong>
              <ul>
                <li><strong>CRITICAL: DO NOT USE AV NODAL BLOCKING AGENTS</strong> (Beta-blockers, Calcium channel blockers, Digoxin, Adenosine). This will block the 'safe' pathway and force all conduction down the accessory pathway, potentially causing V-Fib.</li>
                <li><strong>Stable Patient:</strong> Procainamide (15-18 mg/kg IV at 20-50 mg/min) or Ibutilide.
                <li><strong>Unstable Patient:</strong> Synchronized Cardioversion is the only safe and effective treatment.</li>
              </ul>
              <strong>Evidence:</strong> The AFFIRM trial showed no mortality benefit of a rhythm-control strategy over a rate-control strategy in older patients with AFib.
            </p>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Assess stability. Hypotension, altered mental status, signs of shock, or ischemic chest pain mandate immediate cardioversion.</li>
                <li>Obtain 12-lead ECG. Is it narrow or wide? Regular or irregular?</li>
                <li><strong>Key Decision Point: Is this standard AFib or AFib with WPW?</strong> Look for a history of WPW or delta waves on a prior ECG. If the patient presents with an irregularly irregular wide-complex tachycardia, assume it is AFib with WPW until proven otherwise.</li>
                <li><strong>If standard AFib:</strong> Choose rate vs. rhythm strategy based on patient factors. Initiate rate control for stable patients.</li>
                <li><strong>If AFib with WPW:</strong> Avoid AV nodal blockers. Use Procainamide or cardiovert.</li>
                <li>Activate Specialty Services: Cardiology consultation is always appropriate. Electrophysiology (EP) consultation is required for WPW management (ablation).</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p><strong>For standard AFib RVR (stable):</strong> "This is a stable patient with atrial fibrillation with a rapid ventricular response. My goal is rate control. I have initiated an IV diltiazem bolus and will start an infusion to target a heart rate less than 110. I will assess their stroke risk using the CHADS2-VASC score and consult cardiology regarding anticoagulation and long-term strategy."</p>
            <p><strong>For AFib with WPW (unstable):</strong> "This patient is hemodynamically unstable with an irregularly irregular wide-complex tachycardia, which I am treating as AFib in the setting of WPW. I am preparing for immediate synchronized cardioversion. I am avoiding all AV nodal blocking agents. I will consult cardiology and EP for further management after stabilization."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> New-onset AFib often requires admission for workup and rate control. Stable, chronic AFib with controlled rate can be discharged. AFib with WPW requires admission to a monitored bed, always. Unstable patients go to the ICU/CCU.</li>
              <li><strong>Dangerous Missteps:</strong> The most dangerous pitfall is giving an AV nodal blocker to a patient with AFib and WPW, which can precipitate V-Fib.</li>
              <li><strong>Red-flag Physiology:</strong> An irregularly irregular wide-complex tachycardia should be considered AFib with WPW until proven otherwise. Heart rate > 220 bpm is highly suspicious for an accessory pathway.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Patients may present with weakness, fatigue, or dyspnea on exertion rather than palpitations. Syncope or near-syncope can be a sign of critical rate-related reduction in cardiac output.</p>
            <p><strong>Pattern Recognition:</strong> Recognize that not all wide-complex tachycardias are VTach. An irregular rhythm is a key differentiator suggesting AFib with aberrant conduction or WPW.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> Whenever I see an irregularly irregular tachycardia, my first thought is "Is this AFib?". My second thought is "Is there any reason this could be WPW?". This forces me to pause before reflexively ordering diltiazem.</p>
          `
        },
        {
          id: 4,
          title: 'Massive and Submassive Pulmonary Embolism',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> A large thrombus obstructs the main pulmonary artery or its lobar branches, leading to an abrupt increase in pulmonary vascular resistance (PVR).</p>
            <p><strong>Hemodynamic Basis:</strong> The right ventricle (RV), a thin-walled chamber designed for low pressure, is not equipped to pump against this high afterload. It begins to dilate and fail, causing a rightward shift of the interventricular septum. This septal shift impairs left ventricular (LV) filling (diastolic dysfunction) and reduces LV preload. The combination of RV failure and decreased LV preload leads to a precipitous drop in cardiac output, resulting in obstructive shock and death.</p>
            <p><strong>Definitions:</strong>
              <ul>
                <li><strong>Massive PE:</strong> A PE causing sustained hypotension (SBP <90 mmHg for >15 min), pulselessness, or persistent profound bradycardia.</li>
                <li><strong>Submassive PE:</strong> A PE causing RV dysfunction (seen on echo or CT) or myocardial necrosis (elevated troponin/BNP) WITHOUT hypotension. These patients are "normotensive but sick" and at risk of decompensation.</li>
              </ul>
            </p>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Anticoagulation:</strong> The foundation for ALL PE patients. Start immediately upon suspicion.
                <ul>
                  <li><strong>Heparin:</strong> IV bolus (80 units/kg) and infusion (18 units/kg/hr). Easily titratable if patient needs intervention.</li>
                </ul>
              </li>
              <li><strong>Thrombolysis (for Massive PE):</strong> The standard of care.
                <ul>
                  <li><strong>Alteplase (tPA):</strong> 100mg IV over 2 hours. For crashing patients, give 50mg IV push over 2 minutes.</li>
                  <li><strong>Evidence:</strong> Multiple trials support improved hemodynamics and mortality in massive PE.</li>
                </ul>
              </li>
              <li><strong>Thrombolysis (for Submassive PE):</strong> Controversial.
                <ul>
                  <li><strong>PEITHO Trial:</strong> Showed that thrombolysis in submassive PE reduced hemodynamic decompensation but at the cost of significantly more major bleeding and stroke.</li>
                  <li><strong>Consultant decision:</strong> Reserve for the high-risk submassive patient who is showing signs of decompensation (worsening tachycardia, rising lactate, dropping BP). A shared decision-making conversation is key.</li>
                </ul>
              </li>
              <li><strong>Supportive Care:</strong>
                <ul>
                  <li><strong>Fluids:</strong> Cautious 500mL bolus. Over-filling a failing RV can worsen septal shift and decrease cardiac output.</li>
                  <li><strong>Vasopressors:</strong> Norepinephrine is the pressor of choice to increase SVR and improve coronary perfusion to the strained RV.</li>
                </ul>
              </li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>High index of suspicion in a patient with acute dyspnea, tachycardia, and hypoxia. Use risk scores (Wells, PERC) but do not be ruled by them.</li>
                <li>Assess for hemodynamic instability. If hypotensive, treat as a Massive PE.</li>
                <li>If stable, assess for RV strain (ECG signs like S1Q3T3, new RBBB; bedside echo showing RV dilation, McConnell's sign; elevated troponin/BNP).</li>
                <li><strong>Definitive Diagnosis:</strong> CTA of the chest is the gold standard.</li>
                <li><strong>Massive PE:</strong> Administer thrombolytics immediately. Anticoagulate simultaneously.</li>
                <li><strong>Submassive PE:</strong> Anticoagulate. Stratify risk. Engage in shared decision-making regarding thrombolysis. Watch closely for any decline.</li>
                <li>Activate Specialty Services: Consult Pulmonary/Critical Care. Consider the PERT (Pulmonary Embolism Response Team) if available for discussion of catheter-directed therapies.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p><strong>For Massive PE:</strong> "This patient presents in obstructive shock, and I have a high suspicion for a massive pulmonary embolism. They are hypotensive and tachycardic. While arranging an emergent CTA, I have initiated a heparin drip and am administering full-dose systemic thrombolysis with alteplase. My priority is to resolve the obstruction and restore circulation. I am supporting their blood pressure with norepinephrine."</p>
            <p><strong>For Submassive PE:</strong> "This patient is normotensive but has a confirmed PE with evidence of right heart strain on CT and an elevated troponin, classifying them as submassive. I have initiated anticoagulation with heparin. Given the risk of decompensation versus the risk of bleeding with thrombolytics per the PEITHO trial, I am admitting them to the ICU for close monitoring and have consulted the PERT team to discuss further options."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Massive and submassive PEs require ICU admission.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Delaying thrombolysis in a massive PE to wait for imaging confirmation if the patient is crashing.</li>
                  <li>Giving large volume fluid resuscitation, which can "break" the RV.</li>
                  <li>Intubating a hypotensive PE patient without first addressing the RV failure, as positive pressure ventilation will eliminate their preload and cause immediate cardiac arrest.</li>
                  <li>Failing to recognize the "normotensive but sick" submassive PE patient.</li>
                </ul>
              </li>
              <li><strong>Red-flag Physiology:</strong> The combination of a normal lung exam, hypoxia, and tachycardia. Syncope is a very high-risk feature.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Can present with pleuritic chest pain, cough, or hemoptysis (suggesting a smaller, peripheral PE), but a large central PE can be lurking. New onset atrial fibrillation can be a sign of RV strain from a PE.</p>
            <p><strong>Pattern Recognition:</strong> The post-operative or post-hospitalization patient with sudden cardiovascular collapse. The young woman on oral contraceptives with acute shortness of breath.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient with unexplained shock or hypoxia, I will force myself to ask "Could this be a PE?" and perform a bedside cardiac ultrasound to look for RV dilation before anchoring on sepsis or heart failure.</p>
          `
        },
        {
          id: 5,
          title: 'Acute Heart Failure (SCAPE)',
          pathophysiology: `
            <p><strong>SCAPE (Sympathetic Crashing Acute Pulmonary Edema):</strong> This is not your typical slow-onset, volume-overloaded heart failure. SCAPE is a life-threatening emergency driven by a massive, centrally-mediated sympathetic surge.</p>
            <p><strong>Mechanistic/Hemodynamic Basis:</strong>
              <ol>
                <li>A trigger (e.g., anxiety, pain, non-compliance) causes a massive catecholamine release.</li>
                <li>This leads to extreme vasoconstriction, causing a rapid and severe increase in systemic vascular resistance (afterload).</li>
                <li>The left ventricle, often already dysfunctional, cannot pump against this immense afterload. This causes an exponential rise in left ventricular end-diastolic pressure (LVEDP).</li>
                <li>This pressure is transmitted back to the pulmonary circulation, causing a rapid shift of fluid into the alveoli, leading to fulminant pulmonary edema.</li>
              </ol>
              This is a disease of <strong>afterload mismatch</strong> and fluid maldistribution, not necessarily true volume overload. The patient effectively "flash-drowns" in their own plasma filtrate.
            </p>
          `,
          drugsAndEvidence: `
            <p>The goal is to rapidly break the cycle of sympathetic surge and afterload mismatch.</p>
            <ul>
              <li><strong>Non-Invasive Positive Pressure Ventilation (NIPPV):</strong> BiPAP or CPAP. <strong>This is the most important initial intervention.</strong>
                <ul>
                  <li>It decreases preload and afterload.</li>
                  <li>It increases intrathoracic pressure, pushing fluid out of the alveoli.</li>
                  <li>It decreases the work of breathing and improves oxygenation.</li>
                  <li>Set high pressures: IPAP 15-20 cm H2O, EPAP 8-12 cm H2O.</li>
                </ul>
              </li>
              <li><strong>High-Dose Nitroglycerin:</strong> The primary pharmacologic therapy. Aggressive afterload reduction is key.
                <ul>
                  <li><strong>Bolus Dosing:</strong> Start with 400-800 mcg sublingual spray/tablets while getting IV access. Give IV boluses of 200-400 mcg every 2-5 minutes.</li>
                  <li><strong>Infusion:</strong> Start a drip at 100-200 mcg/min and titrate aggressively upwards. There is no ceiling dose; titrate to clinical effect (improved work of breathing, decreased BP).</li>
                  <li><strong>CAUTION:</strong> Do not use in hypotensive patients or those with critical aortic stenosis.</li>
                </ul>
              </li>
              <li><strong>Furosemide (Lasix):</strong> Plays a secondary role. It has a mild, early venodilating effect, but its diuretic effect is too slow to be life-saving in the first few minutes. Give a standard dose (e.g., 40-80mg IV) after BP is controlled.</li>
              <li><strong>Avoid Intubation:</strong> Intubation should be avoided if possible. The RSI drugs (especially sedatives) can cause hypotension, and positive pressure ventilation can decrease preload, leading to cardiovascular collapse in a sympathetically-driven patient. This phenomenon is known as post-intubation crash.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Recognize the pattern: extreme dyspnea, hypertension, diffuse rales, diaphoresis, tripoding.</li>
                <li><strong>Act immediately.</strong> Do not wait for a chest x-ray. This is a clinical diagnosis.</li>
                <li><strong>Priority 1:</strong> Place patient on BiPAP immediately.</li>
                <li><strong>Priority 2:</strong> Administer high-dose nitrates. Be aggressive.</li>
                <li>Secure IV access, place on monitor, get an ECG to rule out ischemic trigger.</li>
                <li>The goal is to see dramatic improvement in work of breathing and oxygenation within 15-30 minutes.</li>
                <li>If the patient fails to improve, prepare for delayed sequence intubation (DSI) using ketamine and rocuronium after pre-oxygenation and hemodynamic optimization.</li>
                <li>Activate Specialty Services: Cardiology and/or ICU consultation for admission.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient presents with Sympathetic Crashing Acute Pulmonary Edema (SCAPE). They are severely hypertensive and in extremis with respiratory distress. My immediate priorities are to reduce their work of breathing and aggressively decrease afterload.</p>
            <p>I have placed the patient on BiPAP at high settings and am administering high-dose boluses of intravenous nitroglycerin while starting an infusion. My goal is rapid clinical improvement and avoidance of intubation. Once stabilized, I will investigate the underlying trigger for this event."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All SCAPE patients require ICU or step-down unit admission.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Hesitating or being timid with BiPAP or nitroglycerin doses.</li>
                  <li>Waiting for a chest x-ray or lab results before initiating treatment.</li>
                  <li>Rushing to intubate without first attempting to stabilize with NIPPV and afterload reduction, leading to post-intubation circulatory collapse.</li>
                  <li>Mistaking this for an asthma exacerbation and giving sympathomimetics (albuterol), which can worsen the condition.</li>
                </ul>
              </li>
              <li><strong>Red-flag Physiology:</strong> Severe hypertension (SBP > 180) in the setting of fulminant respiratory distress.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> The presentation is rarely subtle; it's defined by its dramatic onset. However, the trigger may be atypical, such as a silent MI or severe emotional distress.</p>
            <p><strong>Pattern Recognition:</strong> The key pattern is the "too sick to lie down" patient who is hypertensive. Any patient sitting bolt upright, diaphoretic, and gasping for air with high blood pressure is SCAPE until proven otherwise.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> When I see a patient in acute respiratory failure, I will force myself to check a blood pressure *before* deciding on a treatment pathway. If the patient is hypertensive, I will immediately pivot to a SCAPE protocol instead of a standard undifferentiated respiratory failure algorithm.</p>
          `
        },
        {
          id: 6,
          title: 'ACLS / Cardiac Arrest Consultant-Level Determinants',
          pathophysiology: `
            <p><strong>Cellular Basis:</strong> Cardiac arrest is the cessation of effective circulation. Within seconds, oxygen delivery to the brain and other vital organs ceases. Within minutes, anaerobic metabolism leads to irreversible cell death. The goal of ACLS is to provide artificial circulation (compressions) and attempt to restore a perfusing rhythm.</p>
            <p><strong>The Four Rhythms:</strong>
              <ol>
                <li><strong>Ventricular Fibrillation (VF):</strong> Chaotic, disorganized electrical activity. No cardiac output. Shockable.</li>
                <li><strong>Pulseless Ventricular Tachycardia (pVT):</strong> Organized, wide-complex tachycardia that does not generate a pulse. Shockable.</li>
                <li><strong>Pulseless Electrical Activity (PEA):</strong> Organized electrical activity (can be any rhythm except VF/pVT) without a mechanical pulse. Not shockable. Represents a state of extreme circulatory failure.</li>
                <li><strong>Asystole:</strong> Flat line. No electrical or mechanical activity. Not shockable.</li>
              </ol>
            </p>
          `,
          drugsAndEvidence: `
            <p>Beyond standard ACLS algorithms, a consultant focuses on high-quality CPR and reversing underlying causes.</p>
            <ul>
              <li><strong>High-Quality CPR:</strong> The single most important intervention.
                <ul>
                  <li><strong>Rate:</strong> 100-120 compressions/min.</li>
                  <li><strong>Depth:</strong> 2-2.4 inches (5-6 cm).</li>
                  <li><strong>Recoil:</strong> Allow full chest recoil.</li>
                  <li><strong>Minimize Interruptions:</strong> Less than 10 seconds. Use waveform capnography (EtCO2) to monitor CPR quality. A sudden drop in EtCO2 suggests loss of compression quality; a sustained EtCO2 < 10 mmHg indicates poor prognosis or ineffective CPR. An abrupt rise in EtCO2 to >35-40 mmHg is an early sign of ROSC (Return of Spontaneous Circulation).</li>
                </ul>
              </li>
              <li><strong>Epinephrine:</strong> 1mg IV/IO every 3-5 minutes. The PARAMEDIC2 trial showed epinephrine improved ROSC but did not improve neurologically intact survival compared to placebo. It remains standard of care.</li>
              <li><strong>Amiodarone/Lidocaine:</strong> For refractory VF/pVT. The ALPS trial showed no difference between amiodarone, lidocaine, or placebo for survival to discharge. Amiodarone 300mg push, then 150mg. Lidocaine 1-1.5 mg/kg.</li>
              <li><strong>Bicarbonate:</strong> Not routinely recommended. Consider in known hyperkalemia or TCA overdose.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong> The consultant's role is to run the code, ensure high-quality ACLS, and actively hunt for and treat reversible causes (The H's and T's).</p>
            <ol>
              <li>Assign roles clearly. Designate a CPR leader, airway manager, medication administrator, and recorder.</li>
              <li>Focus on high-quality CPR with minimal interruptions. Use a metronome. Verbally coach the compression team.</li>
              <li>During rhythm checks, simultaneously perform a pulse check and ultrasound check (cardiac POCUS).
                <ul>
                  <li><strong>POCUS Goals:</strong> Look for cardiac standstill vs. organized activity. Assess for tamponade, massive PE (RV dilation), or profound hypovolemia (small, hyperdynamic heart). This is done in <10 seconds.</li>
                </ul>
              </li>
              <li>Systematically run through the H's and T's:
                <ul>
                  <li><strong>Hypovolemia:</strong> POCUS, history. Give fluids/blood.</li>
                  <li><strong>Hypoxia:</strong> Ensure definitive airway, check tube placement, listen to breath sounds.</li>
                  <li><strong>Hydrogen Ion (Acidosis):</strong> Check ABG. Usually a result of prolonged arrest, not a cause.</li>
                  <li><strong>Hypo/Hyperkalemia:</strong> Check labs. Give calcium, insulin/dextrose, bicarb for hyperkalemia.</li>
                  <li><strong>Hypothermia:</strong> Check core temp. Warm the patient.</li>
                  <li><strong>Tension Pneumothorax:</strong> Unequal breath sounds, JVD. Needle decompress, then place chest tube.</li>
                  <li><strong>Tamponade:</strong> POCUS. Perform pericardiocentesis.</li>
                  <li><strong>Toxins:</strong> History, tox screen. Give antidote (e.g., naloxone, intralipid).</li>
                  <li><strong>Thrombosis (Pulmonary/Coronary):</strong> POCUS, history. Consider empiric thrombolysis for suspected massive PE. Send patient with ongoing CPR to cath lab for suspected MI.</li>
                </ul>
              </li>
              <li><strong>Termination of Resuscitation (TOR):</strong> Consider after 20-30 minutes of high-quality ACLS without ROSC, especially if EtCO2 < 10 and initial rhythm was asystole/PEA. This is a complex clinical decision.</li>
            </ol>
          `,
          verbalBoardScript: `
            <p>"We are running a cardiac arrest. The patient is in PEA. CPR is ongoing with a rate of 110, depth is good, and we have full recoil. Capnography shows an EtCO2 of 8, indicating we need to improve our compressions. I am leading a differential-based approach to the H's and T's. On the last rhythm check, cardiac POCUS showed a massively dilated right ventricle, so my leading diagnosis is a massive PE causing this arrest. I am administering thrombolytics and continuing high-quality CPR."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Post-ROSC patients are admitted to the ICU for targeted temperature management and ongoing resuscitation.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Prolonged interruptions in CPR.</li>
                  <li>Failing to systematically search for reversible causes.</li>
                  <li>Not using waveform capnography to guide resuscitation.</li>
                  <li>Stacking shocks without performing CPR in between.</li>
                  <li>Terminating efforts prematurely in a patient with a potentially reversible cause (e.g., hypothermia).</li>
                </ul>
              </li>
              <li><strong>Cognitive Forcing Strategy:</strong> During every 2-minute cycle of CPR, I will force myself and my team to verbally address one of the H's and T's. "This cycle, let's think about toxins. Is there any history?" This ensures a continuous, active search for reversible causes.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p>The presentation is cardiac arrest. The "atypical" aspect lies in the subtle clues that point to the underlying cause before or during the code, which is the consultant's job to uncover.</p>
          `
        }
      ]
    },
    {
      name: 'Toxicology',
      topics: [
        {
          id: 10,
          title: 'TCA Toxicity',
          pathophysiology: `
            <p>Tricyclic antidepressants (TCAs) cause toxicity through multiple mechanisms:</p>
            <ul>
              <li><strong>Sodium Channel Blockade:</strong> This is the most life-threatening effect. It occurs in the His-Purkinje system of the heart, slowing conduction (Phase 0 depolarization). This leads to a widened QRS complex, right axis deviation, and can precipitate ventricular tachycardia and fibrillation.</li>
              <li><strong>Anticholinergic Effects:</strong> Blockade of muscarinic receptors causes tachycardia, mydriasis (dilated pupils), dry skin, urinary retention, and altered mental status ("mad as a hatter, blind as a bat, red as a beet, hot as a hare, dry as a bone").</li>
              <li><strong>Alpha-1 Adrenergic Blockade:</strong> Leads to peripheral vasodilation and hypotension.</li>
              <li><strong>GABA-A Receptor Blockade:</strong> Can lower the seizure threshold.</li>
              <li><strong>Antihistamine Effects:</strong> Causes sedation and coma.</li>
            </ul>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Sodium Bicarbonate:</strong> <strong>The cornerstone of therapy.</strong> Give 1-2 mEq/kg IV push. Start an infusion (3 amps of bicarb in 1L of D5W) run at 1.5-2x maintenance.
                <ul>
                  <li><strong>Goals:</strong> Narrow the QRS complex (<100 ms), resolve ventricular dysrhythmias, and correct hypotension. The mechanism is two-fold: it increases extracellular sodium to overcome competitive blockade at the channel, and it alkalinizes the serum, which reduces the binding of the TCA to the sodium channel.</li>
                  <li><strong>Target serum pH:</strong> 7.50-7.55.</li>
                </ul>
              </li>
              <li><strong>Benzodiazepines (e.g., Lorazepam):</strong> For TCA-induced seizures. Do not use phenytoin, as it is also a sodium channel blocker.</li>
              <li><strong>Norepinephrine:</strong> For refractory hypotension not responsive to fluids and sodium bicarbonate. It directly counteracts the alpha-1 blockade.</li>
              <li><strong>Lipid Emulsion Therapy (Intralipid 20%):</strong> Considered for patients in cardiac arrest or with refractory shock. Acts as a "lipid sink" to pull the lipophilic TCA out of the tissues. Bolus 1.5 mL/kg over 1 minute.</li>
              <li><strong>Evidence:</strong> Treatment guidelines are based on case series, animal models, and mechanistic understanding. RCTs are not ethical or feasible.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Suspect in any patient with a deliberate overdose presenting with anticholinergic signs, seizures, and cardiovascular collapse.</li>
                <li>Obtain an ECG immediately. Look for the classic signs: sinus tachycardia, wide QRS (>100 ms), and a prominent terminal R wave in aVR (>3 mm). A R/S ratio > 0.7 in aVR is also suggestive.</li>
                <li>If QRS is >100 ms or ventricular arrhythmia is present, immediately administer sodium bicarbonate.</li>
                <li>Secure the airway early for comatose patients or those with recurrent seizures.</li>
                <li>Establish large-bore IV access and place on continuous cardiac monitoring.</li>
                <li>Activate Specialty Services: Consult medical toxicology or poison control early.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient presents with a suspected TCA overdose, evidenced by their altered mental status and anticholinergic signs. The ECG is concerning for cardiotoxicity with a QRS duration of 140ms and a prominent R wave in aVR. My priority is to prevent and treat life-threatening cardiovascular collapse.</p>
            <p>I have administered sodium bicarbonate boluses and started an infusion with the goal of narrowing the QRS and maintaining a serum pH of 7.50-7.55. I am treating their seizures with benzodiazepines and have initiated norepinephrine for refractory hypotension. The patient is intubated, on continuous cardiac monitoring, and I have consulted medical toxicology."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All symptomatic TCA overdose patients require ICU admission for at least 24 hours of monitoring, as toxicity can be delayed or prolonged.</li>
              <li><strong>Disposition Triggers:</strong> Any ECG changes, altered mental status, seizures, or hypotension. Asymptomatic patients with a normal ECG can be observed for 6 hours.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Failing to recognize the ECG signs of cardiotoxicity.</li>
                  <li>Delaying sodium bicarbonate therapy.</li>
                  <li>Using Class IA (procainamide) or IC (flecainide) antiarrhythmics, which worsen sodium channel blockade.</li>
                  <li>Using physostigmine for anticholinergic symptoms (can cause asystole in the setting of conduction delays).</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Early on, the presentation may be dominated by sedation or mild anticholinergic signs without obvious cardiotoxicity. The progression to seizures and cardiac arrest can be abrupt.</p>
            <p><strong>Pattern Recognition:</strong> A wide-complex tachycardia in an overdose patient should always raise suspicion for TCA or other sodium channel blocker toxicity.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any overdose patient, I will obtain an ECG within 10 minutes of arrival and specifically measure the QRS duration and examine lead aVR. This forces consideration of sodium channel blockade before the patient crashes.</p>
          `
        },
        {
          id: 11,
          title: 'Salicylate Toxicity',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> Salicylates (aspirin) are mitochondrial toxins. They uncouple oxidative phosphorylation, the process that generates ATP. This forces cells to switch to anaerobic metabolism, leading to a massive production of organic acids (lactic acid, ketoacids). </p>
            <p><strong>Systemic Effects:</strong>
              <ol>
                <li><strong>Direct CNS Stimulation:</strong> Causes hyperventilation, leading to a primary respiratory alkalosis. Tinnitus is also a classic early sign.</li>
                <li><strong>Metabolic Acidosis:</strong> From the uncoupling of oxidative phosphorylation. This creates the classic mixed acid-base disorder: a primary respiratory alkalosis with a primary metabolic acidosis.</li>
                <li><strong>Acidemia Worsens Toxicity:</strong> As the blood pH drops (becomes more acidic), more salicylate (which is a weak acid) converts from its ionized form to its non-ionized, lipophilic form. This non-ionized form readily crosses the blood-brain barrier, leading to profound neurotoxicity (cerebral edema, seizures, coma) and death. This is the central principle of managing salicylate toxicity.</li>
              </ol>
            </p>
          `,
          drugsAndEvidence: `
            <p>The goals are to prevent absorption, enhance elimination, and prevent the salicylate from entering the brain.</p>
            <ul>
              <li><strong>Activated Charcoal:</strong> If within 1-2 hours of a large, acute ingestion. 1 g/kg.</li>
              <li><strong>Sodium Bicarbonate:</strong> <strong>The cornerstone of therapy.</strong> The goal is serum and urine alkalinization.
                <ul>
                  <li><strong>Method:</strong> Give 1-2 mEq/kg IV bolus, then start an infusion (3 amps of bicarb in 1L of D5W) at 1.5-2x maintenance. Add 40mEq of potassium to the infusion bag, as alkalinization drives potassium into cells, causing hypokalemia which prevents effective urine alkalinization.</li>
                  <li><strong>Goals:</strong> Serum pH 7.45-7.55. Urine pH > 7.5. Alkalinizing the serum "ion traps" the salicylate in the blood, preventing it from entering the CNS. Alkalinizing the urine dramatically enhances its renal elimination.</li>
                </ul>
              </li>
              <li><strong>Glucose:</strong> Salicylates cause neuroglycopenia (low glucose in the brain) even with normal serum glucose. Provide supplemental dextrose in IV fluids.</li>
              <li><strong>Hemodialysis:</strong> <strong>The definitive treatment for severe toxicity.</strong>
                <ul>
                  <li><strong>Indications:</strong> Altered mental status, seizures, coma, cerebral edema, pulmonary edema, renal failure, severe acidemia (pH < 7.2), or a very high salicylate level (>100 mg/dL acute, >60 mg/dL chronic).</li>
                </ul>
              </li>
              <li><strong>AVOID INTUBATION:</strong> Intubation is extremely dangerous. The period of apnea during RSI removes the patient's compensatory respiratory alkalosis. This causes a precipitous drop in pH, driving salicylate into the brain and causing immediate cardiovascular collapse. If intubation is unavoidable, use a strategy that avoids apnea (e.g., ketamine-facilitated, keep patient breathing) and aggressively hyperventilate the patient post-intubation.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Suspect in a patient with tachypnea, tinnitus, altered mental status, and a mixed acid-base disorder.</li>
                <li>Get an early salicylate level, but do not wait for the level to start treatment if suspicion is high. Levels may rise over time, especially with enteric-coated preparations.</li>
                <li>Immediately begin serum and urine alkalinization with a sodium bicarbonate drip. Check serum pH and urine pH frequently.</li>
                <li>Assess for indications for hemodialysis. Any neurologic symptom is a strong indication.</li>
                <li>Provide supportive care: IV fluids, glucose, and potassium replacement.</li>
                <li>Activate Specialty Services: Consult medical toxicology/poison control and nephrology for emergent hemodialysis.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient presents with a suspected salicylate overdose, evidenced by their tachypnea, altered mental status, and a mixed respiratory alkalosis and metabolic acidosis on their blood gas. My primary goal is to prevent salicylate from entering the central nervous system by alkalinizing the serum and to enhance elimination by alkalinizing the urine.</p>
            <p>I have initiated a sodium bicarbonate infusion with supplemental potassium, targeting a serum pH of 7.5 and a urine pH greater than 7.5. Given the patient's altered mental status, they have a clear indication for emergent hemodialysis, and I have already consulted nephrology. I am avoiding intubation due to the high risk of hemodynamic collapse."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All symptomatic patients require ICU admission.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>The single most dangerous pitfall is premature intubation leading to iatrogenic death.</li>
                  <li>Failing to recognize the need for dialysis in a patient with neurologic symptoms.</li>
                  <li>Not giving enough potassium, which prevents effective urine alkalinization.</li>
                  <li>Being falsely reassured by an early, non-toxic salicylate level.</li>
                  <li>Anchoring on a diagnosis of sepsis or DKA, which can also present with tachypnea and an anion gap acidosis.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> In the elderly (chronic toxicity), the presentation can be a vague delirium or confusion without the classic full-blown picture. They may have therapeutic levels but severe toxicity.</p>
            <p><strong>Pattern Recognition:</strong> The "sepsis workup negative" patient who remains tachypneic and confused. The DKA patient whose mental status doesn't improve with insulin.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient with an unexplained anion gap metabolic acidosis, I will force myself to ask "Could this be a salicylate overdose?" and send a level, especially if they are tachypneic.</p>
          `
        },
        {
          id: 12,
          title: 'Acetaminophen Toxicity',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> Acetaminophen (APAP) is primarily metabolized in the liver through safe, non-toxic pathways (glucuronidation and sulfation). A small fraction is metabolized by the CYP2E1 enzyme system into a highly toxic metabolite called NAPQI (N-acetyl-p-benzoquinone imine).</p>
            <p>Under normal circumstances, NAPQI is immediately detoxified by glutathione. In an overdose, the primary pathways become saturated, shunting more APAP down the CYP2E1 pathway, generating massive amounts of NAPQI. The liver's glutathione stores are rapidly depleted, allowing NAPQI to accumulate and bind to hepatocytes, causing oxidative damage and irreversible centrilobular necrosis.</p>
            <p><strong>Toxicologic Basis:</strong> The antidote, N-acetylcysteine (NAC), works by acting as a glutathione precursor, replenishing hepatic glutathione stores, and also by directly binding to and detoxifying NAPQI.</p>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Decontamination:</strong> Activated charcoal (1 g/kg) can be given if the patient presents within 1-2 hours of ingestion.</li>
              <li><strong>N-acetylcysteine (NAC):</strong> <strong>The cornerstone of therapy.</strong> It is nearly 100% effective at preventing hepatotoxicity if started within 8 hours of ingestion.
                <ul>
                  <li><strong>IV Protocol (Acetadote):</strong> The most commonly used regimen in the US. It's a 21-hour protocol.
                    <ol>
                      <li><strong>Loading dose:</strong> 150 mg/kg in 200mL D5W over 60 minutes.</li>
                      <li><strong>Second dose:</strong> 50 mg/kg in 500mL D5W over 4 hours.</li>
                      <li><strong>Third dose:</strong> 100 mg/kg in 1000mL D5W over 16 hours.</li>
                    </ol>
                    Non-allergic anaphylactoid reactions (flushing, rash, mild hypotension) are common with the loading dose due to histamine release. If this occurs, pause the infusion, treat with diphenhydramine, and restart at a slower rate.
                  </li>
                  <li><strong>PO Protocol:</strong> A 72-hour protocol. Less common due to the foul smell/taste and vomiting.</li>
                </ul>
              </li>
              <li><strong>When to treat with NAC:</strong>
                <ul>
                  <li>The decision is guided by the <strong>Rumack-Matthew Nomogram</strong>. Plot a serum APAP level drawn between 4 and 24 hours post-ingestion. If the level is above the treatment line, NAC is indicated.</li>
                  <li><strong>Treat empirically if:</strong> The time of ingestion is unknown, the level will not be back within 8 hours, there is evidence of liver injury (elevated AST/ALT), or the patient is pregnant.</li>
                </ul>
              </li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Determine the time of ingestion. This is critical for interpreting the APAP level on the nomogram. Distinguish between an acute, single ingestion and a chronic or staggered overdose.</li>
                <li>Obtain a 4-hour (or later) post-ingestion APAP level. Also obtain baseline LFTs (AST/ALT), coags (PT/INR), and a pregnancy test.</li>
                <li>Plot the level on the Rumack-Matthew nomogram. If "possibly toxic" or "probably toxic," start NAC. "When in doubt, treat."</li>
                <li>For massive overdoses or rising LFTs despite NAC, consult a medical toxicologist or poison center. The NAC protocol may need to be extended.</li>
                <li>Assess for fulminant hepatic failure (encephalopathy, coagulopathy). Identify patients who may need a liver transplant using the <strong>King's College Criteria</strong> (pH < 7.3 after resuscitation, or all of the following: INR > 6.5, creatinine > 3.4, and Grade III/IV encephalopathy).</li>
                <li>Activate Specialty Services: Consult medical toxicology. Consult the liver transplant service early if King's College Criteria are met.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient presents after an acute acetaminophen overdose. The ingestion occurred 6 hours ago. The 4-hour level was plotted on the Rumack-Matthew nomogram and falls above the treatment line. Therefore, I have initiated the 21-hour intravenous N-acetylcysteine protocol to prevent hepatotoxicity.</p>
            <p>I have obtained baseline liver function tests and will be monitoring them closely. I have consulted the poison center for further recommendations. If the patient develops signs of fulminant hepatic failure such as encephalopathy or severe coagulopathy, I will consult the liver transplant team immediately."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Patients requiring NAC are admitted. Low-risk patients who are asymptomatic with a non-toxic 4-hour level can be medically cleared.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Incorrectly applying the nomogram (e.g., using a level drawn before 4 hours, using it for chronic ingestions).</li>
                  <li>Delaying NAC administration past the 8-hour window.</li>
                  <li>Stopping the NAC protocol prematurely in a patient with evidence of ongoing liver injury.</li>
                  <li>Failing to recognize the "asymptomatic" period (first 24 hours) and being falsely reassured.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> The first 24 hours are often a "latent" phase with minimal symptoms (nausea, malaise). The severe liver injury does not become apparent until 24-72 hours post-ingestion. Patients may present with abdominal pain and vomiting, mimicking gastroenteritis.</p>
            <p><strong>Pattern Recognition:</strong> Any patient with a deliberate overdose should have an APAP level checked, as it is a common co-ingestant. Unexplained transaminitis should prompt consideration of an occult APAP ingestion.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> For any patient with an intentional overdose, I will always obtain an acetaminophen and salicylate level, regardless of the stated ingestant, as a routine safety check.</p>
          `
        }
      ]
    },
    {
      name: 'Neurology',
      topics: [
         {
          id: 20,
          title: 'Status Epilepticus',
          pathophysiology: `
            <p><strong>Definition:</strong> A single seizure lasting more than 5 minutes, or two or more seizures without a complete return to baseline consciousness in between. This is a neurological emergency.</p>
            <p><strong>Mechanistic Basis:</strong> Status epilepticus (SE) arises from a failure of mechanisms that normally terminate a seizure, coupled with the initiation of mechanisms that sustain it. Initially, there's an imbalance between excitatory (glutamate) and inhibitory (GABA) neurotransmission. As the seizure continues (typically >20-30 minutes), GABA receptors are internalized into the neurons, making them less responsive to GABA-agonist drugs like benzodiazepines. Concurrently, excitatory NMDA receptors move to the cell surface, making the neuron more prone to sustained firing. This leads to a 'refractory' state.</p>
            <p><strong>Cellular/Systemic Effects:</strong> Prolonged seizure activity causes massive metabolic demand, leading to neuronal injury and death through excitotoxicity. Systemic effects include hyperthermia, rhabdomyolysis, lactic acidosis, and cardiovascular collapse.</p>
          `,
          drugsAndEvidence: `
            <p>Treatment follows a stepwise, time-sensitive approach. The ESETT trial (Established Status Epilepticus Treatment Trial) informs second-line therapy.</p>
            <ul>
              <li><strong>First Line (0-5 minutes - Emergent): Benzodiazepines</strong>
                <ul>
                  <li><strong>Lorazepam:</strong> 0.1 mg/kg IV (max 4mg), may repeat once.</li>
                  <li><strong>Diazepam:</strong> 0.15 mg/kg IV (max 10mg), may repeat once.</li>
                  <li><strong>Midazolam:</strong> 10mg IM if no IV access.</li>
                </ul>
              </li>
              <li><strong>Second Line (5-20 minutes - Urgent): Non-benzodiazepine Antiepileptics.</strong> ESETT showed Levetiracetam, Fosphenytoin, and Valproic acid have similar efficacy.
                <ul>
                  <li><strong>Levetiracetam (Keppra):</strong> 60 mg/kg IV (max 4500mg) over 15 minutes.</li>
                  <li><strong>Fosphenytoin:</strong> 20 mg PE/kg IV (max 1500mg PE) at 100-150 mg PE/min.</li>
                  <li><strong>Valproic Acid:</strong> 40 mg/kg IV (max 3000mg) over 10 minutes.</li>
                </ul>
              </li>
              <li><strong>Third Line (20-40 minutes - Refractory):</strong> If seizures continue, consider adding another second-line agent or moving to anesthetic infusions. This requires intubation and continuous EEG monitoring.
                <ul>
                  <li><strong>Propofol:</strong> Load 1-2 mg/kg, infuse at 20-200 mcg/kg/min.</li>
                  <li><strong>Midazolam:</strong> Load 0.2 mg/kg, infuse at 0.1-2 mg/kg/hr.</li>
                  <li><strong>Pentobarbital:</strong> Load 5-15 mg/kg, infuse at 0.5-5 mg/kg/hr.</li>
                </ul>
              </li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>ABCs first. Position the patient to protect from injury, apply oxygen. Prepare for intubation if respiratory effort is poor or if moving to third-line agents.</li>
                <li>Establish IV access and check a point-of-care glucose. Treat hypoglycemia if present.</li>
                <li>Administer first-line benzodiazepine therapy immediately.</li>
                <li>If seizure persists, immediately administer a second-line agent. Do not "wait and see." Time is brain.</li>
                <li>While treating, initiate a diagnostic workup to find the cause (e.g., non-compliance, metabolic derangement, CNS infection, stroke, tumor). Order labs, head CT, consider LP.</li>
                <li>Activate Specialty Services: Consult neurology early for all cases of SE. Consult neurocritical care for refractory SE requiring anesthetic drips.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient is in status epilepticus. My immediate priorities are to terminate the seizure and manage the airway. I have administered lorazepam. As the seizure is ongoing, I am now loading the patient with levetiracetam per the ESETT trial protocol. I am simultaneously checking for and correcting reversible causes like hypoglycemia.</p>
            <p>I am preparing for definitive airway management, as we may need to escalate to anesthetic infusions. I have consulted neurology, and we are obtaining a CT scan to evaluate for an intracranial process. The patient is on continuous cardiac and pulse oximetry monitoring."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All patients with status epilepticus require admission to a monitored setting, most often the ICU, for close observation, continuous EEG, and management of the underlying cause.</li>
              <li><strong>Disposition Triggers:</strong> Resolution of seizure activity, airway stability, and hemodynamic stability are required before transfer from the ED.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Underdosing benzodiazepines.</li>
                  <li>Waiting too long between first- and second-line therapies. This allows GABA receptors to internalize, making treatment harder.</li>
                  <li>Paralyzing a patient for intubation without ensuring the seizure has stopped electrically (i.e., causing non-convulsive status epilepticus). Requires EEG confirmation.</li>
                  <li>Failing to search for and treat the underlying cause.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Non-convulsive status epilepticus (NCSE) can present as prolonged post-ictal state, confusion, altered mental status, or a waxing and waning level of consciousness without overt motor activity. Subtle facial twitching, eye deviation, or nystagmus may be the only clues.</p>
            <p><strong>Pattern Recognition:</strong> Any patient who fails to return to their baseline mental status after a witnessed seizure should be considered to be in NCSE until proven otherwise.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> If a patient is "post-ictal" for more than 30-60 minutes, I will force myself to consider non-convulsive status and obtain an EEG to rule it out. I will not attribute prolonged altered mental status solely to the post-ictal state without investigation.</p>
          `
        },
        {
          id: 21,
          title: 'Acute Stroke',
          pathophysiology: `
            <p><strong>Ischemic Stroke (85%):</strong> Caused by the occlusion of a cerebral artery, typically by a thrombus or an embolus. This leads to a core of irreversibly infarcted brain tissue surrounded by an area of salvageable, dysfunctional tissue called the ischemic penumbra. The goal of acute therapy is to restore blood flow (reperfusion) to save the penumbra.</p>
            <p><strong>Hemorrhagic Stroke (15%):</strong>
              <ul>
                <li><strong>Intracerebral Hemorrhage (ICH):</strong> Bleeding directly into the brain parenchyma, most commonly due to uncontrolled hypertension.</li>
                <li><strong>Subarachnoid Hemorrhage (SAH):</strong> Bleeding into the subarachnoid space, most commonly from a ruptured saccular ("berry") aneurysm.</li>
              </ul>
            </p>
          `,
          drugsAndEvidence: `
            <p><strong>Ischemic Stroke:</strong>
              <ul>
                <li><strong>Thrombolysis (tPA/Alteplase):</strong> The NINDS trial showed that tPA (0.9 mg/kg, max 90mg; 10% as bolus, rest over 1 hour) improves neurologic outcomes if given within 3-4.5 hours of "last known normal". Strict inclusion/exclusion criteria apply. Blood pressure must be <185/110 mmHg.</li>
                <li><strong>Endovascular Thrombectomy (EVT):</strong> For large vessel occlusions (LVOs) in the anterior circulation. The DAWN and DEFUSE-3 trials proved its benefit in an extended time window (up to 24 hours from last known normal) in select patients who have a mismatch between clinical deficit and infarct size.</li>
                <li><strong>Blood Pressure Management:</strong> Permissive hypertension (up to 220/120) is allowed in patients NOT receiving tPA to maintain perfusion to the penumbra. If giving tPA, BP must be lowered to <185/110 (Labetalol, Nicardipine).</li>
              </ul>
            </p>
            <p><strong>Hemorrhagic Stroke:</strong>
              <ul>
                <li><strong>Blood Pressure Control:</strong> Aggressive BP reduction is key to prevent hematoma expansion. The INTERACT2 trial supports targeting an SBP < 140 mmHg. Use Labetalol or Nicardipine.</li>
                <li><strong>Reversal of Anticoagulation:</strong> If the patient is on anticoagulants, reverse immediately (e.g., Vitamin K/Kcentra for warfarin, Idarucizumab for dabigatran, Andexanet alfa for Factor Xa inhibitors).</li>
              </ul>
            </p>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway: "Time is Brain"</strong>
              <ol>
                <li>Rapid recognition of stroke symptoms (FAST: Face, Arms, Speech, Time). Check a point-of-care glucose to rule out hypoglycemia.</li>
                <li>Activate the stroke team immediately.</li>
                <li><strong>Priority 1:</strong> Get a non-contrast head CT immediately (<20 min from arrival). This single test differentiates ischemic from hemorrhagic stroke, which have opposite treatments.</li>
                <li><strong>If Ischemic:</strong>
                  <ul>
                    <li>Determine last known normal time. Assess for tPA contraindications.</li>
                    <li>If eligible, administer tPA.</li>
                    <li>Simultaneously, obtain a CTA of the head and neck to look for an LVO. If present, activate the neuro-interventional team for thrombectomy evaluation.</li>
                  </ul>
                </li>
                <li><strong>If Hemorrhagic:</strong>
                  <ul>
                    <li>Initiate aggressive BP control.</li>
                    <li>Reverse any anticoagulation.</li>
                    <li>Consult neurosurgery immediately.</li>
                  </ul>
                </li>
              </ol>
            </p>
            <p><strong>Medical Scores:</strong> The NIH Stroke Scale (NIHSS) is used to quantify the deficit. The ASPECTS score on non-contrast CT helps determine the extent of early ischemic changes and eligibility for EVT.</p>
          `,
          verbalBoardScript: `
            <p>"This is a [age]-year-old with acute onset of [symptoms], consistent with a stroke. Their last known normal was [time]. The non-contrast head CT is negative for hemorrhage. Their NIHSS is [score]. They have no contraindications to thrombolysis, so I have initiated alteplase. The CTA shows a large vessel occlusion in the right MCA, so I have activated the neuro-interventional team for emergent thrombectomy evaluation based on the DAWN and DEFUSE-3 trial criteria."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All acute stroke patients are admitted to a stroke unit or neuro-ICU.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Delaying the non-contrast head CT.</li>
                  <li>Giving tPA to a patient with a stroke mimic (e.g., seizure with Todd's paralysis) or an actual hemorrhagic stroke.</li>
                  <li>Failing to control BP before, during, and after tPA administration.</li>
                  <li>Missing the window for thrombectomy by not performing a CTA in a timely manner.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Posterior circulation strokes (vertebrobasilar) can present with vague symptoms like dizziness, vertigo, diplopia, dysarthria, and ataxia ("dizziness plus"). These can be missed if attributed to benign peripheral vertigo.</p>
            <p><strong>Pattern Recognition:</strong> Stroke "chameleons" can mimic other conditions. A patient presenting with acute confusion, behavioral change, or isolated visual field cuts may be having a stroke.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any elderly patient with a sudden onset of a vague neurologic complaint (especially dizziness or confusion), I will force myself to perform a detailed neurologic exam and consider a posterior circulation stroke, rather than defaulting to a diagnosis of simple vertigo or delirium.</p>
          `
        },
        {
          id: 22,
          title: 'Subarachnoid Hemorrhage',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> Most commonly caused by the rupture of a saccular (berry) aneurysm at arterial branch points in the Circle of Willis. The rupture releases arterial blood under high pressure directly into the subarachnoid space.</p>
            <p><strong>Physiologic Effects:</strong>
              <ol>
                <li><strong>Sudden Increase in ICP:</strong> The skull is a fixed vault. The sudden influx of blood volume causes a dramatic rise in intracranial pressure (ICP), which can lead to a decrease in cerebral perfusion pressure (CPP = MAP - ICP), causing global cerebral ischemia, loss of consciousness, and even death.</li>
                <li><strong>Chemical Meningitis:</strong> Blood irritates the meninges, causing severe headache, nuchal rigidity, and photophobia.</li>
                <li><strong>Cerebral Vasospasm:</strong> A delayed complication (occurring 3-14 days after the bleed) where cerebral arteries narrow, causing delayed ischemic strokes.</li>
              </ol>
            </p>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Blood Pressure Control:</strong> Similar to ICH, gentle BP control is important to reduce the risk of re-bleeding, which is highest in the first 24 hours. Target an SBP of 140-160 mmHg using a titratable agent like Nicardipine or Labetalol. Avoid aggressive BP reduction that could compromise cerebral perfusion.</li>
              <li><strong>Reversal of Anticoagulation:</strong> Mandatory. Reverse any existing anticoagulants immediately.</li>
              <li><strong>Analgesia and Antiemetics:</strong> Control pain (opioids) and vomiting (ondansetron) to prevent spikes in ICP.</li>
              <li><strong>Nimodipine:</strong> A calcium channel blocker that is the only medication shown to improve outcomes in SAH. It does not prevent vasospasm but reduces the neurologic deficits associated with it. Start 60mg PO/NGT every 4 hours for all patients with diagnosed SAH.</li>
              <li><strong>Seizure Prophylaxis:</strong> Levetiracetam is often given to prevent seizures, though routine use is debated.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>High index of suspicion for any patient presenting with a "thunderclap headache" (maximal intensity at onset) or "the worst headache of my life." Other red flags include headache with syncope, seizure, or focal neurologic deficit.</li>
                <li><strong>Priority 1:</strong> Emergent non-contrast head CT. It has >95% sensitivity within the first 6 hours.</li>
                <li><strong>Key Decision Point: If CT is negative but suspicion remains high (e.g., classic story, nuchal rigidity), a lumbar puncture (LP) is mandatory.</strong>
                  <ul>
                    <li><strong>LP Findings:</strong> Look for an elevated opening pressure and xanthochromia (yellowish tinge of the CSF from bilirubin breakdown, which takes several hours to develop). An elevated RBC count that does not decrease from tube 1 to tube 4 is also indicative of SAH.</li>
                  </ul>
                </li>
                <li>Once SAH is confirmed, obtain a CTA of the head to identify the source of bleeding (aneurysm, AVM).</li>
                <li>Initiate medical management: BP control, anticoagulation reversal, pain control, and start Nimodipine.</li>
                <li>Activate Specialty Services: Immediate neurosurgery consultation for aneurysm coiling or clipping. Admit to a neuro-ICU.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient presents with a thunderclap headache. The non-contrast head CT demonstrates blood in the subarachnoid space, confirming a subarachnoid hemorrhage. My priorities are to prevent re-bleeding and manage intracranial pressure.</p>
            <p>I have consulted neurosurgery and am obtaining a CTA to identify the aneurysm. I have initiated a nicardipine infusion to maintain a systolic blood pressure less than 160, reversed their anticoagulation, and have started nimodipine to prevent delayed cerebral ischemia. The patient is being transferred to the neuro-ICU."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All SAH patients go to the neuro-ICU.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Failing to perform an LP on a CT-negative patient with a high-pretest-probability story. This is a major source of missed SAH.</li>
                  <li>Misinterpreting a traumatic LP (RBCs present from the needle stick) as a true SAH. Look for xanthochromia and consistent RBC counts across tubes.</li>
                  <li>Delaying neurosurgical consultation or BP control.</li>
                  <li>Giving ketorolac or other NSAIDs for the headache before the diagnosis is known.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Not all SAH presents as a 10/10 headache. A "sentinel bleed" may cause a more moderate, unusual headache days or weeks before a major rupture. The patient can also present with isolated neck pain, syncope, or seizures.</p>
            <p><strong>Pattern Recognition:</strong> The patient who presents with a headache and has a third nerve palsy (ptosis, "down and out" eye) may have a posterior communicating artery aneurysm compressing the nerve.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient I am discharging with a diagnosis of "benign headache," I will force myself to ask: "Are there any high-risk features (sudden onset, associated neurologic symptoms, age >50, stiff neck) that would mandate further workup?"</p>
          `
        }
      ]
    },
    {
      name: 'Critical Care',
      topics: [
        {
          id: 30,
          title: 'Sepsis',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> Sepsis is a life-threatening organ dysfunction caused by a dysregulated host response to infection. It's not the infection itself, but the body's overwhelming and injurious response. This leads to widespread inflammation, endothelial damage, and microvascular thrombosis.</p>
            <p><strong>Hemodynamic Basis (Septic Shock):</strong> The hallmark is distributive shock.
              <ul>
                <li><strong>Vasodilation:</strong> Inflammatory mediators (like nitric oxide) cause profound systemic vasodilation, leading to a drop in systemic vascular resistance (SVR) and relative hypovolemia.</li>
                <li><strong>Capillary Leak:</strong> Endothelial damage increases vascular permeability, causing fluid to leak from the intravascular space into the interstitium, worsening hypovolemia and causing edema.</li>
                <li><strong>Myocardial Depression:</strong> Sepsis-induced cardiomyopathy can occur, reducing cardiac contractility and cardiac output.</li>
              </ul>
            The clinical definition of septic shock is sepsis with persistent hypotension requiring vasopressors to maintain a MAP ≥ 65 mmHg AND having a serum lactate level > 2 mmol/L despite adequate fluid resuscitation.
          `,
          drugsAndEvidence: `
            <p>Management is guided by the Surviving Sepsis Campaign guidelines.</p>
            <ul>
              <li><strong>Fluids:</strong> Initial resuscitation with 30 mL/kg of IV crystalloid (balanced solutions like Lactated Ringer's may be preferred over normal saline to avoid hyperchloremic acidosis). Fluid administration should be guided by dynamic assessments of fluid responsiveness (e.g., passive leg raise, POCUS).</li>
              <li><strong>Antibiotics:</strong> Administer broad-spectrum antibiotics covering likely pathogens within <strong>1 hour</strong> of recognition. This is a critical, time-sensitive intervention.</li>
              <li><strong>Vasopressors:</strong> For persistent hypotension after initial fluid challenge.
                <ul>
                  <li><strong>Norepinephrine:</strong> First-line agent. Provides potent alpha-1 (vasoconstriction) and mild beta-1 (inotropic) effects.</li>
                  <li><strong>Vasopressin:</strong> Can be added as a second agent to decrease norepinephrine requirements.</li>
                </ul>
              </li>
              <li><strong>Corticosteroids:</strong> Consider IV hydrocortisone (e.g., 50mg q6h) for patients with septic shock refractory to vasopressors. (ADRENAL, APROCCHSS trials).</li>
              <li><strong>Source Control:</strong> Urgently identify and treat the source of infection (e.g., drain abscess, remove infected line, debride necrotic tissue).</li>
              <li><strong>Evidence:</strong> The ProCESS, ARISE, and ProMISe trials showed that complex, protocolized care (Early Goal-Directed Therapy) was not superior to usual, high-quality resuscitation.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li><strong>Early Recognition:</strong> High index of suspicion. Use screening tools like qSOFA but rely on clinical gestalt. Look for suspected infection plus evidence of organ dysfunction (hypotension, altered mental status, tachypnea, oliguria).</li>
                <li><strong>The "Hour-1 Bundle":</strong> Measure lactate, obtain blood cultures, administer broad-spectrum antibiotics, begin rapid fluid resuscitation, apply vasopressors if hypotensive during or after fluids.</li>
                <li><strong>Hunt for the Source:</strong> Thorough physical exam, history, and appropriate imaging (CXR, UA, CT).</li>
                <li><strong>Reassessment:</strong> Continuously reassess volume status and perfusion. Is the patient fluid responsive? Is the MAP goal achieved? Is lactate clearing?</li>
                <li>Activate Specialty Services: Early consultation with ICU and any surgical/procedural service needed for source control.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient presents with septic shock, evidenced by hypotension, altered mental status, and a lactate of 6 in the setting of a suspected pneumonia. I have initiated the Hour-1 bundle. Blood cultures are drawn, and they have received broad-spectrum antibiotics. They have received a 30 mL/kg crystalloid bolus and remain hypotensive, so I have started a norepinephrine infusion to maintain a MAP greater than 65.</p>
            <p>My priorities now are source control, ongoing resuscitation guided by dynamic measures, and admission to the ICU. I am arranging for definitive airway management due to their worsening mental status and respiratory distress."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Sepsis with any organ dysfunction requires admission. Septic shock requires the ICU.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Delaying antibiotics. Every hour of delay increases mortality.</li>
                  <li>Inadequate fluid resuscitation or, conversely, indiscriminate fluid overload in non-responsive patients.</li>
                  <li>Failing to obtain source control.</li>
                  <li>Anchoring on an alternative diagnosis and missing sepsis.</li>
                </ul>
              </li>
              <li><strong>Red-flag Physiology:</strong> The "warm shock" patient (warm, flushed extremities with bounding pulses) can be an early sign of high-output distributive shock. A lactate > 4 is a marker of severe illness and high mortality.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> The elderly may present with only confusion, weakness, or functional decline, and are often afebrile or even hypothermic. Immunocompromised patients may not mount a robust inflammatory response (no fever, normal WBC).</p>
            <p><strong>Pattern Recognition:</strong> Unexplained acidosis, new-onset atrial fibrillation, or subtle mental status changes can be the first signs of sepsis.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient with unexplained organ dysfunction (e.g., acute kidney injury, altered mental status), I will force myself to ask, "Could this be sepsis?" and explicitly search for a source of infection.</p>
          `
        },
        {
          id: 31,
          title: 'DKA in Adults',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> Diabetic Ketoacidosis (DKA) is a state of absolute or relative insulin deficiency combined with an excess of counter-regulatory hormones (glucagon, cortisol, catecholamines). This occurs most commonly in Type 1 diabetics but can occur in Type 2 under stress.</p>
            <p><strong>The Triad of DKA:</strong>
              <ol>
                <li><strong>Hyperglycemia:</strong> Lack of insulin prevents glucose uptake by cells, and excess glucagon promotes gluconeogenesis and glycogenolysis in the liver.</li>
                <li><strong>Ketosis:</strong> Insulin deficiency promotes uninhibited lipolysis, releasing free fatty acids that are converted in the liver to ketone bodies (acetoacetate, beta-hydroxybutyrate), which are acidic.</li>
                <li><strong>Metabolic Acidosis:</strong> The accumulation of ketoacids leads to a high anion gap metabolic acidosis.</li>
              </ol>
            <strong>Systemic Effects:</strong> Hyperglycemia causes an osmotic diuresis, leading to profound dehydration and electrolyte loss (sodium, potassium, phosphate, magnesium). The total body potassium is severely depleted, even though the initial serum potassium may be normal or high due to an acidosis-induced extracellular shift.
            </p>
          `,
          drugsAndEvidence: `
            <p>Management is a careful, simultaneous correction of dehydration, hyperglycemia, and electrolyte abnormalities.</p>
            <ul>
              <li><strong>Fluids:</strong> <strong>Priority #1.</strong> Restores perfusion and lowers glucose via dilution and improved renal clearance.
                <ul>
                  <li>Start with 1-2 liters of Normal Saline (0.9% NaCl) in the first hour.</li>
                  <li>Switch to Half-Normal Saline (0.45% NaCl) after the initial bolus if the corrected sodium is normal or high.</li>
                </ul>
              </li>
              <li><strong>Insulin:</strong> <strong>Do NOT start insulin until the potassium is known and >3.3 mEq/L.</strong>
                <ul>
                  <li>Start a continuous IV infusion of regular insulin at 0.1 units/kg/hour. Do not give an initial bolus, as it's associated with a faster drop in glucose and osmolarity, with no proven benefit.</li>
                  <li>The goal is to decrease glucose by 50-75 mg/dL per hour and, more importantly, to turn off ketogenesis.</li>
                </ul>
              </li>
              <li><strong>Potassium:</strong> Aggressive replacement is critical. Insulin will drive potassium into the cells, causing precipitous hypokalemia if not replaced.
                <ul>
                  <li>If initial K+ is < 3.3, hold insulin and give 20-40 mEq of potassium per hour until K+ > 3.3.</li>
                  <li>If initial K+ is 3.3-5.2, add 20-30 mEq of potassium to each liter of IV fluid.</li>
                  <li>If initial K+ > 5.2, do not add potassium initially but recheck frequently.</li>
                </ul>
              </li>
              <li><strong>Bicarbonate:</strong> Not routinely recommended. May be considered in severe acidemia (pH < 6.9) but is controversial.</li>
              <li><strong>Closing the Gap:</strong> Once the blood glucose is ~200-250 mg/dL, add dextrose to the IV fluids (switch to D5/0.45% NaCl) to prevent hypoglycemia while continuing the insulin infusion. The insulin must continue until the anion gap closes (typically < 12) and the acidosis resolves.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Recognize the clinical picture: polyuria, polydipsia, abdominal pain, Kussmaul respirations, fruity breath. Confirm with labs (glucose >250, ketonuria/ketonemia, AG > 12, bicarb < 18).</li>
                <li><strong>Assess severity:</strong> Look for altered mental status, severe acidosis (pH < 7.0), or hemodynamic instability.</li>
                <li>Initiate fluid resuscitation immediately.</li>
                <li><strong>Check potassium before giving insulin. This is a critical safety step.</strong></li>
                <li>Start insulin drip and potassium replacement as indicated.</li>
                <li>Monitor electrolytes and glucose hourly. Monitor anion gap and bicarb every 2-4 hours.</li>
                <li>Search for and treat the underlying trigger (infection, ischemia, insulin non-compliance, new-onset diabetes).</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient presents with diabetic ketoacidosis, confirmed by hyperglycemia, ketonemia, and a high anion gap metabolic acidosis. My priorities are to correct their profound dehydration, safely lower their glucose to shut down ketogenesis, and closely monitor and replete their electrolytes, especially potassium.</p>
            <p>I have started aggressive IV fluid resuscitation with normal saline. Their initial potassium was 4.5, so I have initiated a continuous insulin infusion at 0.1 units/kg/hour and am adding potassium to their maintenance fluids. I will monitor their labs hourly and will add dextrose to the fluids once the glucose falls below 250. The goal is to continue the insulin infusion until the anion gap has closed."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Mild DKA may go to a step-down unit, but moderate to severe DKA requires the ICU for frequent monitoring.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Giving insulin before knowing the potassium level, causing fatal arrhythmia.</li>
                  <li>Stopping the insulin drip when the glucose normalizes but before the anion gap closes. This allows ketogenesis to resume.</li>
                  <li>Not providing dextrose, leading to hypoglycemia while the insulin is still needed.</li>
                  <li>Dropping the glucose too quickly, increasing the risk of cerebral edema (more common in pediatrics, but can happen in adults).</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Euglycemic DKA:</strong> Can occur in patients taking SGLT-2 inhibitors (e.g., Jardiance, Farxiga). These drugs cause glucosuria, so the blood sugar may be normal or only mildly elevated, but the patient is in florid DKA. Maintain a high index of suspicion in any patient on an SGLT-2i with nausea, vomiting, and an anion gap acidosis.</p>
            <p><strong>Pattern Recognition:</strong> DKA can mimic an acute abdomen due to severe abdominal pain, nausea, and vomiting.</p>
          `
        },
        {
          id: 32,
          title: 'DKA in Pediatrics & Cerebral Edema Risk',
          pathophysiology: `
            <p>The pathophysiology of DKA is the same as in adults (insulin deficiency, hyperglycemia, ketosis, acidosis). However, pediatric patients have key differences:</p>
            <ul>
              <li>They have lower glycogen reserves and are more prone to ketosis.</li>
              <li>They are at a significantly higher risk for the most feared complication: <strong>cerebral edema.</strong></li>
            </ul>
            <p><strong>Cerebral Edema:</strong> The exact mechanism is debated but is thought to be related to the rapid shifts in osmolality during treatment. Rapid correction of hyperglycemia and hypernatremia can cause an osmotic gradient that drives free water into brain cells. This leads to brain swelling, herniation, and death. It is the leading cause of mortality in pediatric DKA.</p>
          `,
          drugsAndEvidence: `
            <p>The principles of treatment are similar to adults but with much greater caution regarding fluid and insulin administration. The goal is slow, steady correction.</p>
            <ul>
              <li><strong>Fluid Management (CRITICAL):</strong> This is the most important difference from adult DKA management. The goal is to replace the fluid deficit slowly over 24-48 hours.
                <ol>
                  <li><strong>Initial Bolus:</strong> A single, cautious bolus of 10-20 mL/kg of Normal Saline (0.9% NaCl) over 1 hour. Avoid repeated boluses unless the patient is in shock.</li>
                  <li><strong>Calculating Deficit & Maintenance:</strong>
                    <ul>
                      <li>Assume 5-10% dehydration based on clinical signs. (e.g., 10kg child, 10% dehydrated = 100mL/kg deficit = 1000mL deficit).</li>
                      <li>Calculate 48-hour maintenance fluids (Holliday-Segar method: 100mL/kg for first 10kg, 50mL/kg for next 10kg, 20mL/kg for remainder).</li>
                      <li><strong>Total Fluid Rate:</strong> (Deficit + Maintenance) / 48 hours. This is the continuous IV rate.</li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li><strong>Insulin:</strong> Start an infusion of 0.05 - 0.1 units/kg/hour. <strong>Only start after the initial fluid bolus is complete and K+ > 3.3.</strong> Slower is safer.</li>
              <li><strong>Potassium:</strong> Same principles as adults; add K-Phos and K-Acetate or KCl to fluids once K+ is in a safe range and urine output is established.</li>
              <li><strong>Glucose:</strong> Add dextrose (D5 or D10) to fluids when blood glucose reaches 250-300 mg/dL to allow continued insulin administration for ketosis resolution.</li>
              <li><strong>Treatment of Cerebral Edema:</strong> This is a life-threatening emergency.
                <ul>
                  <li><strong>Signs/Symptoms:</strong> Headache, decreasing level of consciousness, bradycardia, hypertension (Cushing's triad), cranial nerve palsies.</li>
                  <li><strong>Treatment:</strong> Elevate head of bed. Reduce IV fluid rate. Give <strong>Mannitol</strong> (0.5-1 g/kg IV) or <strong>Hypertonic Saline (3%)</strong> (5-10 mL/kg IV). Prepare for intubation and hyperventilation.</li>
                </ul>
              </li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Recognize pediatric DKA. Be vigilant for altered mental status.</li>
                <li><strong>"Go slow and low."</strong> The mantra of pediatric DKA.</li>
                <li>Administer a single, weight-based fluid bolus. Then meticulously calculate and start the 48-hour correction rate.</li>
                <li>Delay insulin until after the first hour of fluids. Start insulin at a lower rate (0.05-0.1 u/kg/hr).</li>
                <li>Perform frequent neurologic exams. This is as important as checking labs. Any change in mental status is cerebral edema until proven otherwise.</li>
                <li>Activate Specialty Services: Immediate consultation with a pediatric endocrinologist and/or pediatric critical care specialist. All pediatric DKA patients require admission, usually to a PICU.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This is a [age]-year-old child with diabetic ketoacidosis. My management is focused on slow and steady correction to minimize the risk of cerebral edema. The patient has received a single 10 mL/kg fluid bolus, and I have calculated their deficit and maintenance fluids to be replaced over 48 hours.</p>
            <p>The insulin infusion is running at 0.05 units/kg/hour. I am performing hourly neurologic checks and monitoring electrolytes closely. I have consulted pediatric critical care, and the patient will be transferred to the PICU for continued management."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All pediatric DKA patients are admitted, typically to a PICU or a floor with specialized pediatric DKA protocols.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Aggressive fluid resuscitation with multiple boluses ("adult-style" resuscitation).</li>
                  <li>Starting insulin too early or at too high a rate.</li>
                  <li>Correcting glucose too rapidly.</li>
                  <li>Failing to recognize the early signs of cerebral edema.</li>
                  <li>Administering bicarbonate, which has been associated with an increased risk of cerebral edema.</li>
                </ul>
              </li>
              <li><strong>Red-flag Physiology:</strong> Any complaint of headache or a change in behavior/arousal during treatment. Bradycardia is a very ominous sign.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> New-onset Type 1 diabetes in a young child can present as bedwetting, weight loss, and lethargy. Abdominal pain is a very common presenting symptom and can be mistaken for appendicitis or gastroenteritis.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any pediatric patient with abdominal pain, vomiting, or altered mental status, I will force myself to check a point-of-care blood glucose and a urine dipstick for glucose and ketones.</p>
          `
        }
      ]
    },
    {
      name: 'Trauma',
      topics: [
        {
          id: 50,
          title: 'Traumatic Brain Injury – ICP Strategy',
          pathophysiology: `
            <p><strong>Primary Injury:</strong> The initial, direct damage to the brain from the traumatic event (e.g., contusion, shearing of axons). This is irreversible.</p>
            <p><strong>Secondary Injury:</strong> The subsequent cascade of events in the hours and days after the primary injury that exacerbates brain damage. This is what we aim to prevent. Key mechanisms include:
              <ul>
                <li><strong>Cerebral Edema:</strong> Swelling of the brain tissue.</li>
                <li><strong>Expanding Hematomas:</strong> (Epidural, subdural, intraparenchymal).</li>
                <li><strong>Increased Intracranial Pressure (ICP):</strong> The Monroe-Kellie doctrine states the skull is a fixed box containing brain, blood, and CSF. An increase in one component (e.g., blood from a hematoma) requires a decrease in another, or ICP will rise.</li>
                <li><strong>Hypotension & Hypoxia:</strong> These "secondary insults" are devastating to the injured brain and dramatically worsen outcomes.</li>
              </ul>
            <strong>Cerebral Perfusion Pressure (CPP):</strong> CPP = MAP - ICP. This is the pressure gradient driving blood flow to the brain. If ICP rises or MAP falls, CPP decreases, leading to cerebral ischemia and worsening secondary injury.
          `,
          drugsAndEvidence: `
            <p>The goal is to optimize CPP by maintaining MAP and lowering ICP.</p>
            <ul>
              <li><strong>Airway & Breathing:</strong> Intubate early for GCS ≤ 8 to protect the airway and control ventilation.
                <ul>
                  <li><strong>Target PaCO2:</strong> 35-40 mmHg (normocapnia). Hyperventilation (PaCO2 < 30) causes cerebral vasoconstriction and reduces cerebral blood flow, and should only be used as a temporary bridge to other therapies in cases of impending herniation.</li>
                  <li><strong>Target SpO2:</strong> >94%. Avoid hypoxia at all costs.</li>
                </ul>
              </li>
              <li><strong>Circulation:</strong>
                <ul>
                  <li><strong>Target SBP:</strong> >100 mmHg (for ages 50-69) or >110 mmHg (for ages 15-49 or >70). A single episode of hypotension can double mortality. Use fluids and vasopressors as needed.</li>
                </ul>
              </li>
              <li><strong>ICP-Lowering Therapies (Tiered Approach):</strong>
                <ul>
                  <li><strong>Tier 0 (Basics):</strong> Elevate head of bed to 30 degrees, keep neck in neutral position (improves venous outflow). Treat fever and pain. Provide seizure prophylaxis (Levetiracetam).</li>
                  <li><strong>Tier 1 (Hyperosmolar Therapy):</strong>
                    <ul>
                      <li><strong>Hypertonic Saline (3%):</strong> Bolus 250mL (or 3-5 mL/kg) through a central line. Draws water out of the brain via osmosis.</li>
                      <li><strong>Mannitol:</strong> 1 g/kg IV. An osmotic diuretic. Requires an intact blood-brain barrier.</li>
                    </ul>
                  </li>
                  <li><strong>Tier 2 (Salvage):</strong> Decompressive craniectomy, barbiturate coma. These are neurosurgical/ICU interventions.</li>
                </ul>
              </li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Follow ATLS protocols (ABCDEs). A GCS ≤ 8 is an indication for intubation.</li>
                <li><strong>Prevent Secondary Insults:</strong> Aggressively treat hypotension and hypoxia.</li>
                <li>Obtain an emergent non-contrast head CT to identify any surgical lesion (e.g., epidural hematoma).</li>
                <li>If signs of herniation are present (e.g., Cushing's triad - hypertension, bradycardia, irregular respirations; unilateral blown pupil), initiate Tier 1 therapies (hypertonic saline/mannitol) and consider brief, gentle hyperventilation while preparing for definitive treatment.</li>
                <li>Activate Specialty Services: Immediate neurosurgery consultation for ALL moderate to severe TBIs (GCS < 13) or any patient with an intracranial bleed on CT.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This is a trauma patient with a severe traumatic brain injury, GCS of 7. I have intubated the patient to protect their airway and to control ventilation and oxygenation. My priorities are to prevent secondary brain injury by avoiding hypotension and hypoxia, and to identify and manage elevated intracranial pressure.</p>
            <p>The patient's blood pressure is being maintained with a target SBP > 110. The head of the bed is elevated. The non-contrast head CT shows a large epidural hematoma with midline shift. I have consulted neurosurgery for emergent evacuation. As the patient is showing signs of herniation with a blown pupil, I have administered a bolus of hypertonic saline as a bridge to surgery."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Any TBI with intracranial bleeding or GCS < 15 requires admission and neurosurgical consultation. Severe TBI requires a neuro-ICU at a trauma center.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Allowing even a single episode of hypotension or hypoxia.</li>
                  <li>Delaying the head CT.</li>
                  <li>Indiscriminate or prolonged hyperventilation.</li>
                  <li>Failing to recognize signs of herniation.</li>
                  <li>Not reversing anticoagulation in a patient with a traumatic intracranial bleed.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> The elderly on anticoagulants can have a devastating bleed from a minor fall ("ground-level fall"). A "lucid interval" is classic for an epidural hematoma, where the patient is transiently awake and talking before rapid neurologic decline.</li>
            <p><strong>Pattern Recognition:</strong> Any trauma patient with unexplained altered mental status, vomiting, or a severe headache has a head injury until proven otherwise.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any elderly trauma patient, especially those on anticoagulants, I will have a very low threshold to obtain a head CT, even if the mechanism seems trivial and the GCS is 15.</p>
          `
        },
        {
          id: 51,
          title: 'Hemorrhagic Shock – Massive Transfusion Protocol',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> Hemorrhagic shock is shock from intravascular volume loss (blood). As blood volume decreases, cardiac output falls, leading to decreased oxygen delivery and end-organ malperfusion. The body compensates initially with tachycardia and vasoconstriction, but this fails as blood loss continues.</p>
            <p><strong>Triad of Death:</strong> Massive hemorrhage leads to a lethal cycle:
              <ol>
                <li><strong>Coagulopathy:</strong> Dilution of clotting factors from crystalloid resuscitation, consumption of factors, and dysfunction from acidosis and hypothermia.</li>
                <li><strong>Hypothermia:</strong> Impairs the clotting cascade and platelet function.</li>
                <li><strong>Acidosis:</strong> From hypoperfusion (lactic acidosis), also impairs coagulation enzymes.</li>
              </ol>
            This triad perpetuates bleeding and is the rationale behind damage control resuscitation.
            </p>
          `,
          drugsAndEvidence: `
            <p><strong>Damage Control Resuscitation (DCR):</strong> The modern approach to the massively bleeding patient. The goal is to restore perfusion while preventing the lethal triad.</p>
            <ul>
              <li><strong>Permissive Hypotension:</strong> In penetrating trauma without head injury, target a lower SBP (80-90 mmHg) until bleeding is surgically controlled. This avoids "popping the clot" with aggressive resuscitation. Not for blunt or head trauma.</li>
              <li><strong>Minimize Crystalloid:</strong> Limit crystalloid to < 1-2 liters. Excessive crystalloid dilutes clotting factors, worsens acidosis, and does not carry oxygen.</li>
              <li><strong>Massive Transfusion Protocol (MTP):</strong> Activate early. Provides blood products in a balanced ratio to mimic whole blood.
                <ul>
                  <li><strong>Ratio:</strong> 1:1:1 ratio of Packed Red Blood Cells (PRBCs) : Fresh Frozen Plasma (FFP) : Platelets.</li>
                  <li><strong>Evidence:</strong> The PROPPR trial showed that a 1:1:1 ratio resulted in improved hemostasis and reduced 24-hour mortality compared to a 1:1:2 ratio.</li>
                </ul>
              </li>
              <li><strong>Tranexamic Acid (TXA):</strong> An antifibrinolytic that prevents clot breakdown.
                <ul>
                  <li><strong>Dosing:</strong> 1 gram IV over 10 minutes, followed by a 1 gram infusion over 8 hours.</li>
                  <li><strong>Evidence:</strong> The CRASH-2 trial showed that giving TXA within 3 hours of injury significantly reduces all-cause mortality in bleeding trauma patients. Give early!</li>
                </ul>
              </li>
              <li><strong>Other Adjuncts:</strong> Calcium replacement is critical, as citrate in blood products chelates calcium, causing hypocalcemia and impairing coagulation. Warm all fluids and blood products.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Recognize hemorrhagic shock early (hemodynamic instability, mechanism of injury). Use tools like the Assessment of Blood Consumption (ABC) score to predict the need for MTP.</li>
                <li><strong>Priority 1: Stop the bleeding.</strong> Apply direct pressure, tourniquets for extremity hemorrhage, pelvic binders for suspected pelvic fractures.</li>
                <li>Activate the Massive Transfusion Protocol immediately. Don't wait for the patient to become profoundly hypotensive.</li>
                <li>Administer TXA within 3 hours of injury.</li>
                <li>Limit crystalloids. Switch to blood products as soon as they are available.</li>
                <li>Get the patient to the definitive site of hemorrhage control (Operating Room for internal bleeding, Interventional Radiology for pelvic/solid organ bleeds).</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This is a patient with penetrating trauma who presents in Class IV hemorrhagic shock. My approach is damage control resuscitation. I am applying permissive hypotension, have administered TXA per the CRASH-2 trial, and have activated the Massive Transfusion Protocol to deliver blood products in a 1:1:1 ratio, based on the PROPPR trial.</p>
            <p>The primary goal is hemorrhage control. While we are resuscitating, the trauma surgeons are taking the patient directly to the operating room to find and stop the source of bleeding. We are actively warming the patient and replacing calcium to avoid the lethal triad of death."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Trauma bay -> Operating Room or Interventional Radiology -> Surgical ICU.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Delaying activation of MTP.</li>
                  <li>Administering large volumes of crystalloid ("drowning them in saline").</li>
                  <li>Forgetting to give TXA or calcium.</li>
                  <li>Not warming the patient and blood products.</li>
                  <li>Delaying definitive hemorrhage control. Resuscitation alone will not save a patient with uncontrolled surgical bleeding.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Early, compensated shock may present only with mild tachycardia or a narrowed pulse pressure. A normal blood pressure does not mean the patient is stable. The elderly or patients on beta-blockers may not mount a tachycardic response.</p>
            <p><strong>Pattern Recognition:</strong> A trauma patient who is "transiently responsive" to an initial fluid bolus but then becomes hypotensive again almost certainly has ongoing hemorrhage and needs blood and surgery, not more crystalloid.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any trauma patient with a high-risk mechanism (e.g., MVC with intrusion, fall from height, GSW to torso), I will assume they are bleeding until proven otherwise and have a low threshold to activate MTP and consult trauma surgery, even if their initial vital signs are reassuring.</p>
          `
        },
        {
          id: 52,
          title: 'Supracondylar Fracture',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> A fracture of the distal humerus just above the condyles. It is the most common elbow fracture in children, typically from a fall on an outstretched hand (FOOSH) with the elbow in extension.</p>
            <p><strong>Classification (Gartland):</strong>
              <ul>
                <li><strong>Type I:</strong> Non-displaced or minimally displaced.</li>
                <li><strong>Type II:</strong> Displaced with an intact posterior cortex (hinge).</li>
                <li><strong>Type III:</strong> Completely displaced with no cortical contact.</li>
              </ul>
            </p>
            <p><strong>High-Risk Anatomy:</strong> The fracture fragment, typically the distal piece, is often displaced posteriorly and medially. The brachial artery and the median nerve run directly over the anterior aspect of the distal humerus, making them highly vulnerable to injury, entrapment, or compression by the fracture fragment or subsequent swelling. This can lead to the devastating complication of <strong>Volkmann's ischemic contracture.</strong></p>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Analgesia:</strong> Opioids (morphine, fentanyl) are necessary for pain control. Procedural sedation is required for reduction attempts.</li>
              <li><strong>Reduction & Immobilization:</strong>
                <ul>
                  <li><strong>Type I:</strong> Simple immobilization in a long-arm splint with the elbow flexed to ~90 degrees.</li>
                  <li><strong>Type II & III:</strong> Require urgent reduction and percutaneous pinning in the operating room by an orthopedic surgeon.</li>
                </ul>
              </li>
              <li><strong>Emergency Department Management:</strong> The primary ED role is recognition, neurovascular assessment, immobilization, and consultation. If the patient has a pulseless, pale hand (a "pucker sign" on the anterior elbow is a sign of impending compartment syndrome), an immediate, gentle reduction attempt may be necessary in the ED to restore flow while waiting for orthopedics. This involves traction, correction of medial/lateral displacement, and then gentle flexion.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>High index of suspicion in a child with elbow pain and swelling after a fall. Obtain AP and true lateral x-rays of the elbow.</li>
                <li><strong>Priority 1: Meticulous neurovascular exam.</strong>
                  <ul>
                    <li><strong>Vascular:</strong> Check radial pulse and capillary refill. A Doppler ultrasound should be used if the pulse is not palpable. A hand that is cool, pale, and pulseless is a surgical emergency.</li>
                    <li><strong>Neurologic:</strong> Test the median nerve (thumb opposition, "OK" sign), radial nerve (wrist/thumb extension), and ulnar nerve (finger abduction). The anterior interosseous nerve (AIN), a branch of the median nerve, is commonly injured (patient cannot make a circle with thumb and index finger).</li>
                  </ul>
                </li>
                <li><strong>Key Decision Point: Is the hand well-perfused?</strong>
                  <ul>
                    <li><strong>Pulse is present, hand is pink/warm:</strong> This is the most common scenario, even with nerve deficits. Splint, provide analgesia, and obtain an urgent orthopedic consultation. The patient needs to go to the OR.</li>
                    <li><strong>Pulse is absent, hand is cool/pale:</strong> This is a "white hand" and a true vascular emergency. Call orthopedics immediately. Attempt a single, gentle reduction in the ED. If pulse does not return, the patient needs immediate surgical exploration of the brachial artery.</li>
                  </ul>
                </li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This is a child with a displaced supracondylar fracture after a fall. My primary concern is the neurovascular status of the limb. On exam, the radial pulse is absent and the hand is cool and pale. This is a vascular emergency requiring immediate intervention.</p>
            <p>I have emergently consulted orthopedics. While they are coming, I am attempting a gentle, closed reduction under sedation to restore blood flow. If this is unsuccessful, the patient will require immediate transfer to the operating room for open reduction, possible vascular exploration, and pinning."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All displaced (Type II/III) fractures are admitted for surgery. Type I fractures can often be discharged with close orthopedic follow-up. Any fracture with neurovascular compromise is admitted.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Performing an incomplete neurovascular exam and missing a nerve palsy or, worse, a vascular injury.</li>
                  <li>Being falsely reassured by a pink hand if there is no palpable pulse (collateral circulation may keep the hand pink, but perfusion is inadequate). Always use a Doppler.</li>
                  <li>Delaying orthopedic consultation, especially for a pulseless limb.</li>
                  <li>Applying a constrictive cast or splint, leading to compartment syndrome.</li>
                </ul>
              </li>
              <li><strong>Red-flag Physiology:</strong> A pulseless, pale hand. Pain out of proportion or pain with passive finger extension are signs of compartment syndrome.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> A "fat pad" sign (posterior fat pad) on an elbow x-ray in a child is a fracture until proven otherwise, even if no fracture line is visible. The child may simply be refusing to move the arm without obvious deformity.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> For any child with an elbow injury, I will force myself to perform and document a detailed exam of the radial, median, and ulnar nerves AND the vascular status both before and after any manipulation or splinting.</p>
          `
        }
      ]
    },
    {
      name: 'Advanced Procedures',
      topics: [
        {
          id: 40,
          title: 'Surgical Cricothyrotomy',
          pathophysiology: `
            <p><strong>Indications:</strong> A "Can't Intubate, Can't Oxygenate" (CICO) scenario. This is the final, life-saving step in the failed airway algorithm. It is indicated when you are unable to secure an airway with endotracheal intubation and are also unable to adequately oxygenate the patient using less invasive means (e.g., Bag-Valve-Mask, Supraglottic Airway like an LMA).</p>
            <p><strong>Common Scenarios:</strong> Massive facial trauma, airway obstruction from angioedema or foreign body, severe laryngeal edema, or copious blood/emesis obscuring all landmarks.</p>
            <p><strong>Anatomic Basis:</strong> The procedure involves creating a surgical opening through the cricothyroid membrane, which is located between the thyroid cartilage (Adam's apple) and the cricoid cartilage. This provides direct access to the trachea below the level of the vocal cords and most potential obstructions.</p>
          `,
          drugsAndEvidence: `
            <p>This is a procedural skill, not a medication-based intervention.</p>
            <ul>
              <li><strong>Equipment:</strong>
                <ul>
                  <li>Scalpel (typically a #10 or #11 blade)</li>
                  <li>Tracheal hook or Bougie</li>
                  <li>Trousseau dilator (optional)</li>
                  <li>Cuffed endotracheal tube (typically a 6.0, can be a smaller tracheostomy tube)</li>
                </ul>
              </li>
              <li><strong>Key Steps ("Scalpel-Finger-Bougie" Technique):</strong>
                <ol>
                  <li><strong>Landmark Identification:</strong> Palpate the laryngeal prominence (thyroid cartilage). Slide your finger down into the soft depression of the cricothyroid membrane, then onto the firm cricoid cartilage below. Stabilize the larynx with your non-dominant hand.</li>
                  <li><strong>Vertical Incision:</strong> Make a generous (4-5 cm) vertical incision through the skin over the membrane. This allows for better visualization and drainage of blood.</li>
                  <li><strong>Horizontal Stab:</strong> Re-palpate the membrane with your finger through the incision. Make a horizontal stabbing incision through the cricothyroid membrane itself.</li>
                  <li><strong>Insert Finger:</strong> Place your index finger into the incision and into the trachea to confirm placement and dilate the opening.</li>
                  <li><strong>Insert Bougie:</strong> Slide a bougie along your finger into the trachea. You should feel it pass over the tracheal rings ("tracheal clicks").</li>
                  <li><strong>Insert Tube:</strong> Pass a cuffed 6.0 ETT over the bougie into the trachea. Inflate the cuff, remove the bougie.</li>
                  <li><strong>Confirm Placement:</strong> Use waveform capnography and listen for bilateral breath sounds. Secure the tube.</li>
                </ol>
              </li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Recognize the "Can't Intubate, Can't Oxygenate" state. This is a declaration of a failed airway.</li>
                <li>Do not delay. Hesitation is fatal. Once CICO is declared, all other airway attempts should cease.</li>
                <li>Announce clearly to the team, "We have a failed airway, I am proceeding with a surgical cricothyrotomy."</li>
                <li>Position the patient supine with the neck in extension (if no c-spine injury) to bring the larynx anterior.</li>
                <li>Perform the procedure using a deliberate, practiced technique.</li>
                <li>This is a high-stress, low-frequency procedure. Cognitive preparation and regular practice are key.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"We have a 'Can't Intubate, Can't Oxygenate' situation. Multiple attempts at direct laryngoscopy and video laryngoscopy have been unsuccessful, and I am unable to maintain oxygen saturation with a bag-valve-mask or a supraglottic airway. I have declared a failed airway.</p>
            <p>My next step is to establish a definitive surgical airway. I am performing a scalpel-finger-bougie cricothyrotomy. I have identified the cricothyroid membrane, made my incisions, and am now passing the tube. I will confirm placement with waveform capnography."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Post-cricothyrotomy patients require admission to the ICU and will eventually need conversion to a formal tracheostomy in the operating room by ENT or surgery.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li><strong>Delay:</strong> The biggest pitfall is waiting too long to make the decision, resulting in anoxic brain injury.</li>
                  <li><strong>Incorrect Landmark Identification:</strong> Mistaking other structures for the cricothyroid membrane.</li>
                  <li><strong>Inadequate Incision:</strong> Making a small, cosmetic incision that doesn't allow for proper identification and access.</li>
                  <li><strong>Bleeding:</strong> Expect significant bleeding. The key is to ignore it, find the midline structures by feel, and get the tube in. The bleeding can be managed after the airway is secured.</li>
                  <li>Losing the airway after making the incision. Keep a finger in the hole!</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p>The presentation is a failed airway. The challenge is in anatomically difficult situations.</p>
            <p><strong>Difficult Anatomy:</strong> Obesity, pre-existing neck mass or hematoma, or lack of palpable landmarks can make the procedure extremely difficult. Ultrasound can be used to identify the cricothyroid membrane if time permits.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> Before any anticipated difficult airway intubation, I will force myself to locate and mark the cricothyroid membrane on the patient's neck. I will also have the cricothyrotomy kit opened and available at the bedside. This prepares me mentally and physically for the worst-case scenario.</p>
          `
        },
        {
          id: 41,
          title: 'Transcutaneous Pacing',
          pathophysiology: `
            <p><strong>Indication:</strong> Symptomatic, unstable bradycardia that is refractory to medical therapy (e.g., atropine). "Symptomatic" means the slow heart rate is causing end-organ hypoperfusion, such as hypotension, altered mental status, signs of shock, or ischemic chest pain.</p>
            <p><strong>Common Rhythms:</strong> High-degree AV blocks (Mobitz II, Third-Degree), sinus bradycardia, junctional rhythms.</p>
            <p><strong>Mechanistic Basis:</strong> Transcutaneous pacing (TCP) delivers an external electrical stimulus through large pads on the chest wall. The stimulus passes through the chest to the heart, causing myocardial depolarization and contraction. The goal is to achieve "capture," where each electrical stimulus results in a ventricular contraction (a QRS complex and a corresponding pulse).</p>
          `,
          drugsAndEvidence: `
            <p>TCP is an intervention within the ACLS bradycardia algorithm.</p>
            <ul>
              <li><strong>Atropine:</strong> First-line drug for symptomatic bradycardia. 1 mg IV push, may repeat every 3-5 minutes, up to a total of 3 mg. Atropine is unlikely to work in high-degree blocks (below the AV node).</li>
              <li><strong>Pacing Pad Placement:</strong>
                <ul>
                  <li><strong>Anterior-Posterior (preferred):</strong> One pad on the left anterior chest (V2-V4 position), the other on the left posterior chest, next to the spine. This "sandwiches" the heart.</li>
                  <li><strong>Anterior-Lateral:</strong> Standard defibrillation position (right upper chest, left lateral axilla).</li>
                </ul>
              </li>
              <li><strong>Pacing Procedure:</strong>
                <ol>
                  <li>Place pads on the patient and connect to the monitor/defibrillator.</li>
                  <li>Select the "PACER" function.</li>
                  <li><strong>Set the Rate:</strong> Start at 60-80 beats per minute.</li>
                  <li><strong>Set the Current (mA):</strong> Start low and slowly increase the milliamperes (mA) until you see electrical capture (a wide QRS complex following each pacer spike). This is usually between 50-100 mA.</li>
                  <li><strong>Confirm Mechanical Capture:</strong> Electrical capture is not enough. You must confirm that each QRS is generating a pulse. Check the femoral or carotid pulse. The monitor may be misleading.</li>
                </ol>
              </li>
              <li><strong>Analgesia and Sedation:</strong> TCP is very painful. Provide analgesia (e.g., fentanyl) and/or sedation (e.g., midazolam, ketamine) as the patient's hemodynamics allow.</li>
              <li><strong>Dopamine or Epinephrine Drips:</strong> Can be used as an alternative or bridge to pacing if TCP fails or is unavailable.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Identify unstable bradycardia. Does the patient have a pulse? Yes. Is the patient stable or unstable? Unstable.</li>
                <li>Follow the ACLS algorithm. Administer atropine while simultaneously preparing the patient for pacing.</li>
                <li>If atropine is ineffective, immediately begin transcutaneous pacing.</li>
                <li>Achieve both electrical and mechanical capture.</li>
                <li>Provide adequate analgesia and sedation.</li>
                <li>TCP is a bridge to a more definitive therapy. Activate specialty services (cardiology) for transvenous pacemaker placement.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient is in a third-degree AV block with a ventricular escape rhythm of 30. They are hypotensive and altered, consistent with unstable bradycardia. They were unresponsive to a total of 3mg of atropine.</p>
            <p>My priority is to restore an adequate heart rate and perfusion. I have initiated transcutaneous pacing. I have electrical capture at 80 milliamps with a rate of 70, and I have confirmed mechanical capture by palpating a femoral pulse. The patient's blood pressure is improving. I am providing fentanyl for analgesia and have consulted cardiology for emergent transvenous pacemaker placement."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Any patient requiring TCP needs admission to a monitored setting (ICU/CCU) and will require a permanent or temporary transvenous pacemaker.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Delaying pacing in an unstable patient to give multiple doses of atropine, especially in a high-degree block where it is unlikely to work.</li>
                  <li>Assuming electrical capture equals mechanical capture without checking a pulse. This is a critical error. The pacer spikes can cause muscle contraction that can be mistaken for a pulse.</li>
                  <li>Failing to provide adequate analgesia and sedation.</li>
                  <li>Setting the device to "demand" mode (the default) and not recognizing that it will not fire if it senses the patient's slow underlying rhythm. Sometimes you need to set it to "asynchronous" mode, or simply override by increasing the set rate.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p>The presentation is unstable bradycardia. The challenge is recognizing that symptoms like weakness, syncope, or confusion are being caused by the slow heart rate. In an elderly patient, it is easy to anchor on a neurologic cause for altered mental status and miss the underlying bradycardia.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient with syncope or altered mental status, I will always obtain an ECG early in the evaluation to rule out a primary cardiac cause.</p>
          `
        },
        {
          id: 42,
          title: 'Disaster and Role of ED Chief',
          pathophysiology: `
            <p><strong>Definition:</strong> A disaster, or Mass Casualty Incident (MCI), is an event where the number of patients and the severity of their injuries overwhelm the normal operating capacity of a hospital or healthcare system. The fundamental principle shifts from doing everything possible for an individual patient to doing the greatest good for the greatest number of people.</p>
            <p><strong>Incident Command System (ICS):</strong> A standardized, hierarchical management system designed for emergencies. In the hospital, this is the Hospital Incident Command System (HICS). The ED Chief or attending physician on duty often assumes the role of the Emergency Department Branch Director or Medical Care Branch Director, coordinating all clinical activities within the ED.</p>
          `,
          drugsAndEvidence: `
            <p>This is a systems-based, logistical challenge, not a drug-based one. The key "drugs" are communication, command, and control.</p>
            <ul>
              <li><strong>Triage Systems:</strong>
                <ul>
                  <li><strong>START Triage (Simple Triage and Rapid Treatment):</strong> Used in the prehospital setting. Categorizes patients into four groups based on their ability to walk, respiratory status, perfusion, and mental status.
                    <ul>
                      <li><strong>Green (Minor):</strong> Walking wounded.</li>
                      <li><strong>Yellow (Delayed):</strong> Can wait for treatment.</li>
                      <li><strong>Red (Immediate):</strong> Life-threatening injuries, need immediate care.</li>
                      <li><strong>Black (Expectant/Deceased):</strong> Apneic or have injuries incompatible with life in an austere environment.</li>
                    </ul>
                  </li>
                  <li><strong>ED Triage:</strong> Upon arrival, patients are re-triaged, often by a senior physician/nurse team, to specific care areas within the ED (e.g., critical care area, urgent care area, minor care area).</li>
                </ul>
              </li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Role of the ED Chief / Attending (as ED Branch Director):</strong> Your job is to lead, not to do. You must step back from direct patient care to manage the entire department.</p>
            <p><strong>Key Responsibilities (The "Big Picture"):</strong>
              <ol>
                <li><strong>Activate the Plan:</strong> Officially declare an MCI for the department and activate the hospital's disaster plan.</li>
                <li><strong>Establish Command:</strong> Set up a command post within the ED. Put on a vest to be easily identifiable.</li>
                <li><strong>Assess Resources (The 4 S's):</strong>
                  <ul>
                    <li><strong>Staff:</strong> Call in additional staff (nurses, techs, physicians, respiratory therapists).</li>
                    <li><strong>Stuff:</strong> Assess supply needs (chest tubes, blood, ventilators, splints). Communicate needs to the hospital logistics chief.</li>
                    <li><strong>Structure:</strong> Reconfigure the ED space. Convert hallways or waiting rooms into patient care areas. Create a morgue area.</li>
                    <li><strong>Systems:</strong> Ensure systems for communication (radios, runners), patient tracking, and security are functional.</li>
                  </ul>
                </li>
                <li><strong>Manage Patient Flow:</strong>
                  <ul>
                    <li>Oversee the triage process at the ED entrance.</li>
                    <li>Direct patients to appropriate care areas.</li>
                    <li>Rapidly discharge or transfer all existing, stable ED patients to create capacity ("reverse triage").</li>
                    <li>Coordinate with inpatient bed control and the OR to move patients out of the ED as quickly as possible.</li>
                  </ul>
                </li>
                <li><strong>Communicate:</strong> Act as the central point of communication between the ED teams and the main Hospital Command Center. Provide regular, concise updates.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"We have just been notified of a multi-vehicle collision with an estimated 30 casualties en route. I am activating our department's mass casualty incident plan and assuming the role of ED Branch Director. My priorities are to create capacity, call in additional resources, and manage patient flow to do the greatest good for the greatest number of victims.</p>
            <p>I have designated a triage officer and set up red, yellow, and green treatment areas. I am performing a rapid 'reverse triage' to clear all non-critical patients from the department. I have requested additional nursing and physician staff and have alerted the blood bank and operating room to prepare for a surge of critical trauma patients. I will be managing the overall departmental response from the ED command post."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li><strong>Failure to Recognize:</strong> Not realizing you are in an MCI until you are already overwhelmed.</li>
                  <li><strong>Failure to Lead:</strong> The senior physician getting sucked into managing a single critical patient and losing situational awareness of the entire department. This is the most common and dangerous pitfall.</li>
                  <li><strong>Communication Breakdown:</strong> Lack of clear, concise communication leads to chaos and duplicated effort.</li>
                  <li><strong>Resource Tunnel Vision:</strong> Focusing only on the patients in front of you and not anticipating the next wave or planning for future supply needs.</li>
                  <li><strong>Failure to Triage Appropriately:</strong> Expending limited resources on patients who are expectant (black-tagged) at the expense of those who are salvageable (red-tagged).</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> An MCI can be a "slow-moving" disaster, such as a chemical spill or infectious outbreak, where patients trickle in over hours or days. A sudden surge in patients with similar, unusual symptoms should trigger suspicion.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> When the waiting room is full, all the beds are full, and ambulances are still arriving, I must force myself to stop, take a step back, and ask: "Have we exceeded our normal capacity? Do I need to declare a disaster?" This prevents personal task-saturation from obscuring the larger systems problem.</p>
          `
        }
      ]
    },
    {
      name: 'Other',
      topics: [
        {
          id: 60,
          title: 'Upper GI Bleed',
          pathophysiology: `
            <p><strong>Definition:</strong> Bleeding from a source proximal to the Ligament of Treitz.</p>
            <p><strong>Common Causes:</strong>
              <ul>
                <li><strong>Peptic Ulcer Disease (PUD):</strong> Most common cause. Bleeding from duodenal or gastric ulcers.</li>
                <li><strong>Esophageal Varices:</strong> Dilated submucosal veins in the esophagus, almost always a consequence of portal hypertension from cirrhosis. These can rupture and cause massive, life-threatening hemorrhage.</li>
                <li><strong>Mallory-Weiss Tear:</strong> A linear mucosal tear at the gastroesophageal junction caused by forceful retching or vomiting.</li>
                <li><strong>Erosive Gastritis/Esophagitis:</strong> Inflammation and superficial bleeding, often related to NSAIDs, alcohol, or H. pylori.</li>
              </ul>
            </p>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Resuscitation:</strong> Two large-bore IVs. Crystalloid for initial resuscitation, but have a low threshold to switch to blood products.
                <ul>
                  <li><strong>Transfusion Strategy:</strong> A restrictive transfusion strategy (transfuse for Hemoglobin < 7 g/dL) is recommended for most UGIBs, as it's associated with lower mortality compared to a liberal strategy (transfuse for Hgb < 9). <strong>Exception:</strong> In massive hemorrhage, transfuse to maintain perfusion, not a specific Hgb target.</li>
                </ul>
              </li>
              <li><strong>Proton Pump Inhibitors (PPIs):</strong> For suspected non-variceal bleeding (e.g., PUD). A high pH environment promotes clot stability.
                <ul>
                  <li><strong>Dosing:</strong> Pantoprazole or Esomeprazole 80 mg IV bolus, followed by an 8 mg/hr infusion.</li>
                </ul>
              </li>
              <li><strong>Vasoactive Agents (for suspected Variceal Bleeding):</strong>
                <ul>
                  <li><strong>Octreotide:</strong> A somatostatin analog that reduces splanchnic blood flow and portal pressure. <strong>Dosing:</strong> 50 mcg IV bolus, followed by a 50 mcg/hr infusion.</li>
                </ul>
              </li>
              <li><strong>Antibiotics (for Variceal Bleeding):</strong> Cirrhotic patients are at high risk for bacterial infections (e.g., SBP), which can precipitate bleeding. Prophylactic antibiotics (e.g., Ceftriaxone 1g IV) have been shown to reduce re-bleeding and mortality.</li>
              <li><strong>Reversal of Anticoagulation:</strong> Reverse coagulopathy as needed (Vitamin K/Kcentra, etc.).</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li><strong>Assess Hemodynamic Stability:</strong> This is the first and most important step. Tachycardia and hypotension are signs of significant blood loss.</li>
                <li><strong>Differentiate Variceal vs. Non-Variceal:</strong> Does the patient have stigmata of liver disease (jaundice, ascites, caput medusae)? A history of cirrhosis or heavy alcohol use should raise suspicion for varices, which are managed differently.</li>
                <li><strong>Initiate Resuscitation and Medical Therapy:</strong> Start IVs, fluids/blood, and the appropriate targeted medication (PPI for non-variceal, Octreotide + Antibiotics for variceal).</li>
                <li><strong>Airway Management:</strong> Have a low threshold to intubate for massive hematemesis, altered mental status, or inability to protect the airway. This should be done by an experienced provider, as these patients are often hemodynamically unstable.</li>
                <li><strong>Activate Specialty Services:</strong> Early consultation with Gastroenterology (GI) for endoscopy is crucial. Endoscopy is both diagnostic and therapeutic (clipping, banding, cautery). For uncontrolled variceal bleeding, consult Interventional Radiology for a TIPS procedure.</li>
              </ol>
            <p><strong>Medical Scores:</strong> The Glasgow-Blatchford Score can help risk-stratify patients and identify those at very low risk who may be suitable for outpatient management.
          `,
          verbalBoardScript: `
            <p>"This patient presents with hematemesis and is hemodynamically unstable, consistent with a massive upper GI bleed. Given their history of cirrhosis, I have a high suspicion for bleeding esophageal varices. My priorities are aggressive resuscitation and reducing portal pressure.</p>
            <p>I am transfusing packed red blood cells, have started an octreotide infusion, and administered prophylactic ceftriaxone. I have consulted GI for emergent endoscopy. Due to the massive bleeding and declining mental status, I am preparing for endotracheal intubation to protect the airway prior to their procedure."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Any hemodynamically unstable patient, or those with ongoing bleeding, require ICU admission. Stable patients are admitted to a medical floor with GI consultation.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Delaying resuscitation in an unstable patient.</li>
                  <li>Performing a nasogastric lavage to "prove" there is bleeding - it has low sensitivity, can be falsely negative, and does not change management.</li>
                  <li>Failing to give antibiotics in a cirrhotic patient with a GI bleed.</li>
                  <li>Over-transfusing a stable, non-bleeding patient (Hgb > 7).</li>
                  <li>Delaying GI consultation.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Patients may present with melena (black, tarry stools) without any vomiting. They can also present with syncope, weakness, or confusion from anemia without any overt signs of bleeding. A sudden increase in confusion (encephalopathy) in a cirrhotic patient can be a sign of a GI bleed.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient presenting with syncope or unexplained anemia, I will force myself to perform a rectal exam to look for melena or gross blood and consider a GI bleed as the cause.</p>
          `
        },
        {
          id: 61,
          title: 'Ectopic Pregnancy',
          pathophysiology: `
            <p><strong>Definition:</strong> An ectopic pregnancy is any pregnancy in which the fertilized egg implants outside of the uterine cavity. Over 95% occur in the fallopian tube.</p>
            <p><strong>Mechanistic Basis:</strong> As the pregnancy grows in the fallopian tube, a structure not designed to accommodate it, it will eventually outgrow its blood supply and rupture. A ruptured ectopic pregnancy can lead to massive intraperitoneal hemorrhage and death. It is the leading cause of maternal mortality in the first trimester.</p>
            <p><strong>Risk Factors:</strong> Prior ectopic pregnancy, history of Pelvic Inflammatory Disease (PID), prior tubal surgery, IVF.</p>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Resuscitation:</strong> For a ruptured ectopic, this is a surgical emergency. The patient is in hemorrhagic shock.
                <ul>
                  <li>Two large-bore IVs, crystalloid, and early activation of the Massive Transfusion Protocol.</li>
                  <li>Type and crossmatch blood. Give O-negative blood if crossmatched blood is not immediately available.</li>
                </ul>
              </li>
              <li><strong>Medical Management (for stable patients):</strong>
                <ul>
                  <li><strong>Methotrexate:</strong> A folate antagonist that inhibits trophoblastic cell division, effectively terminating the pregnancy.
                  <li><strong>Indications for Methotrexate:</strong> Patient must be hemodynamically stable, have no signs of rupture, have a beta-hCG level typically < 5000 mIU/mL, and an ectopic mass size < 3.5-4 cm without a fetal heartbeat. The patient must also be reliable for follow-up.</li>
                </ul>
              </li>
              <li><strong>Rh Immunoglobulin (Rhogam):</strong> Administer to all Rh-negative women to prevent isoimmunization.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li><strong>Rule #1: Any female of childbearing age with abdominal pain or vaginal bleeding has an ectopic pregnancy until proven otherwise.</strong> Always get a pregnancy test first.</li>
                <li><strong>Assess Hemodynamic Stability:</strong> If unstable (hypotension, tachycardia, syncope, peritonitis), assume it has ruptured. Do not delay for further imaging. Resuscitate and call OB/GYN for immediate surgery.</li>
                <li><strong>Stable Patient Workup:</strong>
                  <ul>
                    <li><strong>Quantitative beta-hCG:</strong> Correlate with ultrasound findings.</li>
                    <li><strong>Bedside Transabdominal/Transvaginal Ultrasound:</strong> This is the key diagnostic test. The goal is to find an intrauterine pregnancy (IUP). If you see a definitive IUP (yolk sac or fetal pole within the uterus), an ectopic pregnancy is virtually ruled out (risk of heterotopic pregnancy is ~1 in 30,000, higher with IVF).</li>
                    <li>If no IUP is seen and the beta-hCG is above the "discriminatory zone" (~1500-3000 mIU/mL), this is highly suspicious for an ectopic. Look for adnexal masses or free fluid in the pelvis (Morison's pouch).</li>
                  </ul>
                </li>
                <li>Activate Specialty Services: Consult OB/GYN for ALL patients with a known or suspected ectopic pregnancy. The decision for surgical vs. medical management is made in conjunction with them.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This is a [age]-year-old female, G[x]P[y] at [z] weeks, who presents with abdominal pain and is hemodynamically unstable. Her pregnancy test is positive. I have a high suspicion for a ruptured ectopic pregnancy causing hemorrhagic shock. My priority is resuscitation and definitive surgical management.</p>
            <p>I am resuscitating with blood products via two large-bore IVs and have made an emergent consultation to OB/GYN. A brief bedside ultrasound shows a large amount of free fluid in the abdomen and no intrauterine pregnancy. The patient is being taken directly to the operating room for a laparoscopy/laparotomy."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Ruptured ectopics go to the OR. Stable ectopics being managed medically or surgically are admitted by OB/GYN. Very early "pregnancies of unknown location" may be discharged with strict 48-hour follow-up for repeat beta-hCG and ultrasound.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Forgetting to order a pregnancy test.</li>
                  <li>Delaying OB/GYN consultation in an unstable patient to get a formal ultrasound. A positive pregnancy test + unstable vital signs = ruptured ectopic. Go to the OR.</li>
                  <li>Being falsely reassured by a small amount of vaginal bleeding. The life-threatening bleed is internal.</li>
                  <li>Misinterpreting a pseudosac in the uterus as a true IUP. A true IUP must have a yolk sac or fetal pole.</li>
                  <li>Forgetting to give Rhogam to an Rh-negative mother.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Patients may present with referred shoulder pain (from diaphragmatic irritation from blood), rectal pressure, or syncope without any preceding pain. The pain can sometimes be vague and diffuse, not localized.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> I will maintain an unshakeable policy: every female patient between the ages of 10 and 60 with abdominal pain, syncope, or vaginal bleeding gets a pregnancy test. There are no exceptions.</p>
          `
        },
        {
          id: 62,
          title: 'Anaphylaxis',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> Anaphylaxis is a severe, life-threatening, systemic hypersensitivity reaction. It is a clinical diagnosis. The classic mechanism involves an antigen (e.g., peanut protein) cross-linking IgE antibodies on the surface of mast cells and basophils. This triggers massive, widespread degranulation, releasing a flood of inflammatory mediators, including histamine, tryptase, leukotrienes, and prostaglandins.</p>
            <p><strong>Systemic Effects:</strong> These mediators cause the clinical syndrome of anaphylaxis:
              <ul>
                <li><strong>Skin:</strong> Vasodilation and capillary leak cause urticaria (hives) and angioedema.</li>
                <li><strong>Respiratory:</strong> Bronchoconstriction causes wheezing and dyspnea. Laryngeal edema can cause stridor and complete airway obstruction.</li>
                <li><strong>Cardiovascular:</strong> Massive vasodilation and capillary leak lead to a profound distributive shock, with a rapid drop in blood pressure and circulatory collapse.</li>
              </ul>
            </p>
          `,
          drugsAndEvidence: `
            <ul>
              <li><strong>Epinephrine:</strong> <strong>The single most important, life-saving treatment. There are no absolute contraindications.</strong> It treats all aspects of anaphylaxis:
                <ul>
                  <li><strong>Alpha-1 agonist:</strong> Reverses vasodilation and reduces edema.</li>
                  <li><strong>Beta-1 agonist:</strong> Increases heart rate and contractility.</li>
                  <li><strong>Beta-2 agonist:</strong> Causes bronchodilation and stops further mast cell degranulation.</li>
                </ul>
                <strong>Dosing:</strong>
                <ul>
                  <li><strong>Intramuscular (IM):</strong> 0.3 - 0.5 mg (of 1:1000 solution) into the anterolateral thigh. May be repeated every 5-15 minutes. This is the preferred route for most cases.</li>
                  <li><strong>Intravenous (IV):</strong> For patients in profound shock or who do not respond to IM injections. This requires extreme caution ("push-dose pressors" or a drip).
                    <ul><li>Push-dose epi: Take 1mL of "cardiac" epi (1:10,000) and add to 9mL of saline to make a 10mcg/mL solution. Give 0.5-2 mL (5-20 mcg) every 2-5 minutes.</li></ul>
                  </li>
                </ul>
              </li>
              <li><strong>Adjunctive (Second-Line) Therapies:</strong> These do NOT replace epinephrine.
                <ul>
                  <li><strong>Antihistamines:</strong> Diphenhydramine (H1 blocker) and Famotidine/Ranitidine (H2 blocker). Help with itching and hives, but do not treat airway or cardiovascular collapse.</li>
                  <li><strong>Corticosteroids:</strong> Methylprednisolone or Prednisone. May prevent the biphasic reaction (a recurrence of symptoms hours later), though evidence is weak.</li>
                  <li><strong>Inhaled Beta-Agonists:</strong> Albuterol for persistent wheezing.</li>
                  <li><strong>IV Fluids:</strong> Aggressive fluid resuscitation for patients with hypotension.</li>
                  <li><strong>Glucagon:</strong> For patients on beta-blockers who are refractory to epinephrine.</li>
                </ul>
              </li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Rapidly recognize the clinical syndrome (exposure to allergen followed by multi-system involvement, e.g., hives + wheezing, or hypotension).</li>
                <li><strong>Administer epinephrine immediately.</strong> Do not delay treatment to wait for a full-blown syndrome or to give adjunctive therapies first.</li>
                <li>Assess airway, breathing, circulation. Prepare for definitive airway management if laryngeal edema (stridor, voice change) is present.</li>
                <li>Administer adjunctive therapies (steroids, antihistamines) AFTER giving epinephrine.</li>
                <li>Observe the patient for at least 4-6 hours after symptoms resolve due to the risk of a biphasic reaction.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient presents with acute onset of urticaria, wheezing, and hypotension after eating shellfish, consistent with anaphylactic shock. My immediate priority is to administer epinephrine and manage the airway and circulation.</p>
            <p>I have administered 0.5mg of intramuscular epinephrine and am starting aggressive IV fluid resuscitation. I have also given corticosteroids and H1/H2 blockers as adjunctive therapy. The patient is on continuous monitoring, and we are prepared for intubation if their angioedema worsens. They will be observed for a minimum of 4-6 hours before considering discharge."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> Patients with any airway or cardiovascular compromise require admission. All others should be observed for 4-6 hours. All patients should be discharged with a prescription for an epinephrine auto-injector and strict instructions on its use and allergen avoidance.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li><strong>Delaying epinephrine.</strong> This is the most common cause of death from anaphylaxis.</li>
                  <li>Giving epinephrine subcutaneously instead of IM (slower, less reliable absorption).</li>
                  <li>Giving adjunctive therapies first, thinking they are the primary treatment.</li>
                  <li>Under-appreciating subtle signs of airway compromise like a hoarse voice or difficulty swallowing.</li>
                  <li>Discharging a patient too early without observing for a biphasic reaction.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>Subtle Cues:</strong> Anaphylaxis can occur without any skin findings (no hives or angioedema). A patient may present with isolated syncope or hypotension after exposure to a known allergen. Some patients present primarily with GI symptoms like cramping, vomiting, and diarrhea.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> In any patient with acute-onset multi-system illness, especially with airway or circulatory compromise, I will force myself to consider anaphylaxis, even in the absence of a clear trigger or classic skin findings.</p>
          `
        },
        {
          id: 63,
          title: 'Asthma – Ventilatory Strategy',
          pathophysiology: `
            <p><strong>Mechanistic Basis:</strong> Severe asthma exacerbation (status asthmaticus) is characterized by profound bronchospasm, airway inflammation, and mucus plugging. This leads to a dramatic increase in airway resistance, particularly during exhalation.</p>
            <p><strong>The Ventilator Problem: Air Trapping & Dynamic Hyperinflation.</strong> Because patients cannot exhale fully against the high resistance, air gets trapped in the lungs at the end of each breath. Each subsequent mechanical breath stacks on top of this trapped air, leading to a progressive increase in end-expiratory pressure. This is called "auto-PEEP" or dynamic hyperinflation. </p>
            <p><strong>Hemodynamic Consequences:</strong> The resulting high intrathoracic pressures decrease venous return to the heart (preload), leading to hypotension and cardiovascular collapse (similar to obstructive shock from a PE or tension pneumothorax). This is the primary cause of death in an intubated asthmatic.</p>
          `,
          drugsAndEvidence: `
            <p>The goal is to provide just enough oxygenation and ventilation to survive while minimizing dynamic hyperinflation. This is a "lung protective" strategy focused on giving the lungs time to exhale.</p>
            <ul>
              <li><strong>Pre-Intubation:</strong> Exhaust all non-invasive options first. High-flow nasal cannula, BiPAP (can be helpful but risky), and IV therapies like magnesium, ketamine, and even epinephrine.</li>
              <li><strong>Intubation:</strong> Use a "delayed sequence intubation" (DSI) with ketamine to allow for pre-oxygenation. Use a large ETT (size 8.0 or larger) to reduce airway resistance.</li>
              <li><strong>Ventilator Settings - The "1/4 Rule" or "Low and Slow":</strong>
                <ul>
                  <li><strong>Respiratory Rate (RR):</strong> LOW. Start at 8-10 breaths per minute. This is the most important setting to allow for long expiratory times.</li>
                  <li><strong>Tidal Volume (Vt):</strong> LOW. Use 6 mL/kg of ideal body weight.</li>
                  <li><strong>Inspiratory Flow Rate:</strong> HIGH. Set to 80-100 L/min. This delivers the breath quickly, maximizing the time left for exhalation.</li>
                  <li><strong>I:E Ratio:</strong> LONG. The above settings will result in an inspiratory-to-expiratory ratio of 1:4 or 1:5.</li>
                  <li><strong>PEEP:</strong> Start at 0-5 cm H2O. Adding external PEEP can worsen air trapping if it's higher than the patient's auto-PEEP.</li>
                </ul>
              </li>
              <li><strong>Monitoring for Dynamic Hyperinflation:</strong>
                <ul>
                  <li><strong>Check Plateau Pressures (Pplat):</strong> Perform an end-inspiratory hold. The Pplat reflects alveolar pressure. If Pplat is > 30 cm H2O, this indicates dangerous hyperinflation.</li>
                  <li><strong>What to do if Pplat is high or patient is hypotensive:</strong> DISCONNECT the patient from the ventilator circuit for 30-60 seconds and allow them to exhale completely. Manually decompress the chest. Then reconnect the vent at an even lower respiratory rate.</li>
                </ul>
              </li>
              <li><strong>Permissive Hypercapnia:</strong> The strategy of allowing the PaCO2 to rise (and pH to fall) is acceptable as long as oxygenation is maintained and the pH is > 7.1-7.2. Correcting the CO2 with a high respiratory rate will kill the patient from dynamic hyperinflation.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li>Recognize the severely ill asthmatic (silent chest, pulsus paradoxus, inability to speak). Try maximal medical and non-invasive therapy first.</li>
                <li>If intubation is necessary, have a clear plan. Announce the ventilator strategy to the respiratory therapist and team beforehand.</li>
                <li>Set the ventilator to "low and slow" settings.</li>
                <li>Immediately after intubation, watch the blood pressure. If the patient becomes hypotensive, disconnect them from the vent and decompress the chest.</li>
                <li>Continuously monitor plateau pressures and adjust the respiratory rate downwards as needed.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This patient with status asthmaticus has failed maximal medical therapy and requires intubation for impending respiratory failure. My primary concern post-intubation is preventing cardiovascular collapse from dynamic hyperinflation. I have instructed the respiratory therapist to set the ventilator for a lung-protective strategy: a low respiratory rate of 8, a low tidal volume of 6 mL/kg, and a high inspiratory flow rate to maximize expiratory time.</p>
            <p>We will tolerate permissive hypercapnia as long as the pH is above 7.15. We will be closely monitoring plateau pressures and hemodynamics. If hypotension develops, my first move will be to disconnect the patient from the ventilator to allow for passive exhalation."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All intubated asthmatics require ICU admission.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Putting the asthmatic on standard "ARDS" ventilator settings with a high rate. This is a fatal error.</li>
                  <li>Focusing on normalizing the PaCO2 instead of preventing hyperinflation.</li>
                  <li>Failing to recognize post-intubation hypotension as a consequence of auto-PEEP and instead treating it with massive fluid boluses, which will be ineffective.</li>
                  <li>Not providing deep sedation and paralysis, as patient-ventilator dyssynchrony will worsen air trapping.</li>
                </ul>
              </li>
            </ul>
          `,
          atypicalPresentations: `
            <p>The main atypical challenge is the asthmatic in cardiac arrest. The cause is often tension pneumothorax or dynamic hyperinflation. Management should include bilateral needle decompression and disconnecting the ETT to allow the chest to decompress.</p>
            <p><strong>Cognitive Forcing Strategy:</strong> Before intubating any asthmatic, I will verbally confirm the ventilator plan with the RT. After intubation, my hand will be on the vent circuit, ready to disconnect it at the first sign of hypotension.</p>
          `
        },
        {
          id: 64,
          title: 'Neonatal Sepsis',
          pathophysiology: `
            <p><strong>Definition:</strong> Sepsis in an infant < 28 days old. This is a true pediatric emergency. Neonates have immature immune systems (decreased neutrophil function, lower complement levels) and are highly susceptible to overwhelming bacterial infection.</p>
            <p><strong>Common Pathogens:</strong>
              <ul>
                <li><strong>Group B Streptococcus (GBS):</strong> The most common cause of early-onset sepsis (< 7 days old). Acquired vertically from the maternal genital tract during birth.</li>
                <li><strong>Escherichia coli (E. coli):</strong> A common cause of both early- and late-onset sepsis.</li>
                <li><strong>Listeria monocytogenes:</strong> Less common, but classically associated with meningitis.</li>
                <li><strong>Herpes Simplex Virus (HSV):</strong> A critical non-bacterial cause to consider, especially with seizures, skin vesicles, or a maternal history of HSV.</li>
              </ul>
            </p>
          `,
          drugsAndEvidence: `
            <p>The workup is standardized, and treatment must be initiated empirically and immediately.</p>
            <ul>
              <li><strong>The "Full Sepsis Workup":</strong> For any febrile neonate (temp > 38°C / 100.4°F) or hypothermic, ill-appearing neonate.
                <ol>
                  <li><strong>Blood Culture:</strong> Essential.</li>
                  <li><strong>Urine Culture:</strong> Obtained via sterile catheterization or suprapubic aspiration.</li>
                  <li><strong>Lumbar Puncture (LP) for CSF analysis and culture:</strong> Mandatory unless the patient is too unstable. Neonates can have meningitis with a normal physical exam.</li>
                  <li>Complete Blood Count (CBC) with differential.</li>
                  <li>Inflammatory markers (CRP, procalcitonin).</li>
                </ol>
              </li>
              <li><strong>Empiric Antibiotics:</strong> Administer immediately after cultures are obtained.
                <ul>
                  <li><strong>Ampicillin:</strong> Covers GBS and Listeria.</li>
                  <li><strong>PLUS Gentamicin OR Cefotaxime:</strong> Gentamicin is often preferred for synergy against GBS and covers gram-negatives like E. coli. Cefotaxime provides excellent CNS penetration and is often used if meningitis is strongly suspected. (Ceftriaxone is avoided in neonates due to risk of biliary sludging and displacing bilirubin from albumin).</li>
                </ul>
              </li>
              <li><strong>Acyclovir:</strong> Add empirically if there is any concern for HSV infection (seizures, vesicles, sick neonate with a negative bacterial workup so far).</li>
              <li><strong>Supportive Care:</strong> IV fluids (10-20 mL/kg boluses), glucose support (neonates have low glycogen stores), and pressors if needed.</li>
            </ul>
          `,
          consultantManagement: `
            <p><strong>Senior Decision Pathway:</strong>
              <ol>
                <li><strong>High Index of Suspicion:</strong> Any neonate who is "not doing well" (lethargic, poor feeding, irritable, febrile, or hypothermic) could be septic. The presentation is often subtle and non-specific.</li>
                <li><strong>Act Quickly:</strong> Do not delay the workup or antibiotics. Obtain IV/IO access, draw labs/cultures, and give the first dose of antibiotics within the hour.</li>
                <li><strong>Perform the LP:</strong> Unless there is a clear contraindication (severe instability, overlying skin infection), the LP must be done. Meningitis cannot be excluded clinically.</li>
                <li>Consider the possibility of non-bacterial causes like HSV or congenital heart disease (which can present like shock).</li>
                <li>Activate Specialty Services: All neonates with suspected sepsis require admission to a neonatal unit (NICU or inpatient pediatrics) in consultation with pediatrics.</li>
              </ol>
            </p>
          `,
          verbalBoardScript: `
            <p>"This is a 15-day-old infant presenting with fever and lethargy. Given the age and non-specific symptoms, my primary concern is neonatal sepsis. I am initiating a full sepsis evaluation including a blood culture, urine culture, and lumbar puncture.</p>
            <p>After obtaining cultures, I have administered empiric antibiotics with ampicillin and gentamicin to cover the most likely pathogens, including GBS, E. coli, and Listeria. The patient is receiving IV fluids and is on a cardiac monitor. I have consulted pediatrics for admission to the hospital for ongoing management and to await culture results."</p>
          `,
          logisticsAndPitfalls: `
            <ul>
              <li><strong>Disposition:</strong> All neonates undergoing a sepsis workup are admitted to the hospital.</li>
              <li><strong>Dangerous Missteps:</strong>
                <ul>
                  <li>Dismissing a "low-grade" fever or subtle symptoms like poor feeding.</li>
                  <li>Delaying antibiotics to wait for lab results.</li>
                  <li>Failing to perform a lumbar puncture and missing meningitis.</li>
                  <li>Not considering and treating for HSV in the right clinical context.</li>
                  <li>Giving Ceftriaxone instead of Cefotaxime/Gentamicin.</li>
                </ul>
              </li>
              <li><strong>Red-flag Physiology:</strong> Hypothermia is as or more concerning than fever. Bulging fontanelle, grunting, and poor tone are ominous signs.</li>
            </ul>
          `,
          atypicalPresentations: `
            <p><strong>The entire presentation is often "atypical."</strong> Neonates do not present like older children or adults. The only sign of sepsis may be a change in feeding habits, a decrease in wet diapers, or a parent saying the baby "just isn't right."</p>
            <p><strong>Cognitive Forcing Strategy:</strong> My rule is that any neonate (<28 days) with a rectal temperature > 100.4°F (38°C) gets a full sepsis workup and admission on empiric antibiotics, without exception. For the afebrile but ill-appearing neonate, I maintain the same high index of suspicion.</p>
          `
        }
      ]
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}