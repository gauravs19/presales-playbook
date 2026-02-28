# Selling Predictive Models Without Over-Promising

When your platform includes predictive analytics, forecasting, or ML-based scoring, you are walking a tightrope. Over-promise and the model fails in production. Under-promise and the prospect buys the competitor who promised the moon.

---

## The Accuracy Trap

Never state a specific accuracy number during a demo unless it is validated against the prospect's own data.

**Dangerous:** "Our model predicts customer churn with 95% accuracy."
**Safe:** "Our model achieves 95% accuracy on our benchmark dataset. During the POC, we'll train it on your historical data and measure the accuracy against your specific customer patterns."

The difference is critical. If you promise 95% and the model achieves 78% on their data, you've failed. If you promise to measure during the POC and achieve 78%, that's a conversation about data quality and model tuning—not a product failure.

## The Three Predictive Model Conversations

### 1. With the Data Scientist (Technical)
They want to know: What algorithm? What features? What training data? What is the model drift monitoring strategy?

> *"Our default model uses gradient boosted trees with automated feature engineering. We retrain monthly on a rolling 12-month window. Model drift is monitored via a PSI (Population Stability Index) threshold—if the input data distribution shifts beyond 0.2, we trigger an alert."*

### 2. With the VP of Operations (Business)
They want to know: What business outcome does this predict? How actionable is the prediction?

> *"The model identifies which customer accounts are at highest risk of churning in the next 90 days. Your success team receives a prioritized list every Monday with specific risk signals for each account—enabling targeted interventions before the customer disengages."*

### 3. With the CISO (Risk)
They want to know: Is the model using our sensitive data? Is the training data exported out of our environment? Are predictions auditable?

> *"The model trains exclusively within your environment—no customer data leaves your cloud account. Every prediction is logged with explainability scores, and your team can audit the feature importance weights that drove each prediction."*

> **War Story:** A competitor's SE demonstrated a churn prediction model during a demo using pre-loaded synthetic data. It predicted with 97% accuracy. The prospect was impressed. During the POC with real data, the accuracy dropped to 62%. The competitor blamed "data quality issues." The SE at the competing platform had set expectations differently: "We expect 70-80% accuracy on your initial dataset, improving to 85%+ after two retraining cycles with your actual feature set." Their model achieved 76% on the first run—exactly as predicted. The prospect chose accuracy transparency over inflated promises.

> **Failure Mode:** "The Demo Data Magician." This SE only demonstrates ML models on curated demo data where the model performs perfectly. They never discuss model limitations, retraining requirements, or accuracy degradation. When the prospect deploys in production and the model underperforms, the SE blames the prospect's data instead of acknowledging they set unrealistic expectations.

**Interview Angle:**
"How do you set expectations around ML model accuracy during an enterprise evaluation?"
A strong answer is: "I never quote accuracy numbers from our benchmark data as guarantees. I position the POC as the accuracy validation phase: 'We'll train the model on your data and measure accuracy against your ground truth.' I set a realistic baseline (70-80% initial accuracy improving with retraining) and explain the factors that influence accuracy—data quality, feature availability, and historical data depth."

🔴 **Senior-Level** — The model is only as good as the data. Set expectations around the POC, not the demo.

---
