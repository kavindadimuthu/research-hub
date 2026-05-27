---
sidebar_position: 4
title: Phase 3 — Method Selection & Model Design
---

# Phase 3 — Method Selection, Model Design, and Development

## Objective

To identify the forecasting methods best suited to the Sri Lankan context through comparative experimentation, and then design and develop an integrated forecasting model using the features from Phase 2 and the selected methods.

This phase operationalises **RQ2** (method selection) and **RQ3** (model design).

---

## Step 1 — Comparative experimentation

A common engineered feature set (from Phase 2) is fed into three candidate method families:

### Baseline methods
| Model | Description |
|---|---|
| Naive | Last observed value as forecast |
| Seasonal Naive | Same period from last week as forecast |
| ARIMA / SARIMA | Autoregressive integrated moving average with seasonal extension |

### Machine learning methods
| Model | Description |
|---|---|
| Random Forest | Ensemble of decision trees with bootstrap aggregation |
| XGBoost | Gradient-boosted trees; handles missing data and mixed feature types |
| Prophet | Decomposable model with explicit seasonality and holiday components |

### Deep learning methods
| Model | Description |
|---|---|
| LSTM | Long Short-Term Memory recurrent network for sequential demand |
| Seq2Seq | Encoder-decoder LSTM for multi-step forecast horizons |
| Graph NN (optional) | Diffusion convolutional RNN for spatial dependencies between stops |

The Graph NN extension is conditional on the EDA (Phase 2) showing significant spatial autocorrelation between stops.

---

## Training procedure

All candidates are trained using **rolling-origin cross-validation**:

- The training window expands forward in time
- Each fold produces a forecast for a held-out validation period immediately following
- This mimics the operational setting where the model is always trained on past data and forecasting the future

Hyperparameters are tuned on the held-out validation slices using grid search (for ML models) and Bayesian optimisation (for DL models).

---

## Step 2 — Method selection

Method selection is made on the basis of validation performance across both:

- **Short-term horizons** (hourly/daily forecasts)
- **Long-term horizons** (weekly and beyond)

The best-performing method (or methods) is then taken forward to model design.

---

## Step 3 — Model design and development

The final model specification covers:

1. **Input representation** — the selected feature set in its engineered form
2. **Architecture or configuration** — the specific model structure (e.g., LSTM hidden units, XGBoost tree depth)
3. **Training procedure** — loss function, optimiser, early stopping criteria
4. **Ensemble strategy** — if multiple methods are competitive, a simple ensemble may outperform any single method

The designed model is then implemented, trained on the full training set, and passed to Phase 4 for final evaluation.

---

## Reference

See [Methods & Models](../../methods/overview) for detailed documentation of each method family.
