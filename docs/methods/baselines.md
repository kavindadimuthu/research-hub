---
sidebar_position: 2
title: Baseline Methods
---

# Baseline Methods

Baselines serve a critical role: they establish the floor. A demand forecasting model that does not substantially beat a naive or seasonal naive forecast is not useful in practice. All ML and DL results in this project are reported *relative to* these baselines, and Diebold–Mariano tests verify whether any accuracy gains are statistically significant.

---

## Naive forecast

**What it does:** Uses the most recent observed value as the forecast for all future steps.

```
ŷ(t+h) = y(t)   for all h
```

**When it's competitive:** At very short horizons (1–2 steps ahead) on stable series.

**Limitations:** Ignores seasonality, trends, and any external covariates. Systematically wrong during peaks and off-peaks.

---

## Seasonal Naive forecast

**What it does:** Uses the value from the same period in the previous cycle.

```
ŷ(t+h) = y(t + h - m)   where m = seasonal period
```

For weekly-seasonal transit demand, `m = 168` (168 hours in a week) for hourly data, or `m = 7` for daily data.

**When it's competitive:** Strong for demand series with stable weekly seasonality and few external shocks.

**Limitations:** Fails on public holidays and special events, which break the weekly pattern.

---

## ARIMA / SARIMA

**What it does:** Autoregressive Integrated Moving Average — decomposes the series into autoregressive (AR), differencing (I), and moving-average (MA) components.

```
ARIMA(p, d, q):
  AR(p): regresses on p lagged values
  I(d):  applies d-order differencing for stationarity
  MA(q): models residual autocorrelation with q lagged errors
```

SARIMA extends this with seasonal AR, I, and MA terms: `SARIMA(p,d,q)(P,D,Q)[m]`.

**Fitting procedure:** The Box-Jenkins methodology — ACF/PACF plots to identify order, AIC/BIC for model comparison, residual diagnostics to confirm white-noise residuals.

**When it's competitive:** Strong on moderate-horizon forecasts for single series with clear seasonal structure. Computationally fast. Interpretable coefficients.

**Limitations:** Univariate by default — external regressors (weather, holidays) require extension to ARIMAX/SARIMAX. Does not generalise across routes (must be refitted per series). Struggles with abrupt level shifts.

**Implementation:** Python `statsmodels` library; automatic order selection via `pmdarima.auto_arima`.

---

## Role in this project

| Method | Short-term baseline | Long-term baseline |
|---|---|---|
| Naive | Yes | No |
| Seasonal Naive | Yes | Yes |
| ARIMA/SARIMA | Yes | Yes |

All ML and DL results will be compared against the best-performing baseline using Diebold–Mariano tests.
