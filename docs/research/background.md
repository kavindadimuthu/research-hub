---
sidebar_position: 1
title: Background & Theory
---

# Background and Theoretical Foundations

## Passenger demand forecasting as a discipline

Passenger demand forecasting sits at the intersection of transportation science, time-series analysis, and machine learning. The goal is to predict *how many people will travel* on a given route, stop, or network segment at a given time — a question that shapes fleet allocation, scheduling, and ultimately service quality for commuters.

Demand is typically forecast at one of three levels:

1. **Network-wide ridership** — total boardings across the system
2. **Route-level boardings** — demand on a specific bus or rail line
3. **Stop-level origin–destination flows** — where passengers board and alight

Each level requires different data granularity and modelling assumptions. This research targets the **route and stop level**, which is the most operationally actionable for an operator making day-to-day planning decisions.

---

## Classical approaches

The statistical tradition treats demand as a stochastic temporal process. The foundational framework is **ARIMA (Autoregressive Integrated Moving Average)** and its seasonal extension **SARIMA**, introduced by Box and Jenkins (1976). These models decompose a time series into autoregressive, differencing, and moving-average components and remain strong baselines because of their interpretability and low data requirements.

Exponential smoothing methods (Holt-Winters) offer a related family of approaches that model level, trend, and seasonality directly and are particularly effective for weekly-periodic transit data.

---

## Machine learning methods

Tree-based ensemble methods — **Random Forest** and **XGBoost** — have become workhorses for tabular time-series prediction. XGBoost (Chen & Guestrin, 2016) in particular has achieved state-of-the-art results on many demand forecasting benchmarks while remaining computationally tractable and interpretable through feature importance scores.

**Facebook Prophet** (Taylor & Letham, 2018) is a decomposable time-series model designed explicitly for business-domain forecasting: it handles multiple seasonalities (daily, weekly, yearly), holiday effects, and trend changepoints in a form that is accessible to non-statisticians. Its structured handling of calendar effects makes it a natural fit for transit demand, which is strongly shaped by school terms, public holidays, and festivals.

---

## Deep learning methods

**Long Short-Term Memory (LSTM)** networks (Hochreiter & Schmidhuber, 1997) address the vanishing gradient problem of vanilla RNNs and can learn long-range dependencies in sequential data. They have been widely applied to transit demand forecasting, with Toqué et al. (2017) demonstrating substantial accuracy gains over ARIMA on Paris public transport data.

**Sequence-to-sequence (Seq2Seq)** architectures extend LSTMs to multi-step prediction, allowing the model to forecast demand across an entire future window rather than one step at a time.

**Graph Neural Networks** — and specifically Diffusion Convolutional RNNs (Li et al., 2018) — model the *spatial* dependencies between stops and routes, treating the transport network as a graph. This is particularly valuable when demand at one stop is predictive of demand at spatially adjacent stops.

Ma et al. (2019) proposed a convolutional-bidirectional LSTM architecture for network-wide metro ridership prediction, combining spatial and temporal modelling in a single framework.

---

## Sri Lankan transport research

Within Sri Lanka, transport research has historically focused on infrastructure economics, road traffic congestion, and survey-based ridership studies. The Sri Lanka Transport Board's Annual Performance Reports (2019) document aggregate ridership but lack the fine-grained spatial-temporal resolution needed for demand forecasting.

A small but growing set of studies has begun applying data analytics. Perera and Wickramasinghe (2020) examined GPS traces from buses to estimate travel time variability in Colombo. De Silva and Fernando (2022) explored emerging smart card data for ridership patterns in the Colombo region.

These contributions are valuable but partial. No published work has integrated multiple data sources or produced a *generalisable* demand forecasting framework for the Sri Lankan context — the gap this research addresses.

---

## Developing-country context

Wang et al. (2021) demonstrated that hybrid statistical–ML models outperform single models on noisy or sparse ridership data — a finding directly relevant to Sri Lanka, where ticketing digitisation is recent and data quality is uneven. The implication is that method selection must account for data constraints, not just performance on high-quality benchmarks.

---

## Key references

| Reference | Contribution |
|---|---|
| Box & Jenkins (1976) | ARIMA framework for time-series forecasting |
| Hochreiter & Schmidhuber (1997) | Long Short-Term Memory networks |
| Chen & Guestrin (2016) | XGBoost: scalable gradient-boosted trees |
| Taylor & Letham (2018) | Prophet: decomposable time-series model |
| Li et al. (2018) | Diffusion convolutional RNN for traffic forecasting |
| Ma et al. (2019) | CNN-BiLSTM for network-wide metro ridership |
| Toqué et al. (2017) | LSTM vs Random Forest for Paris transit forecasting |
| Wang et al. (2021) | Hybrid models for sparse/noisy ridership data |
| Kumarage (2014) | Sri Lankan urban transport strategy |
| Perera & Wickramasinghe (2020) | GPS-based travel time analysis, Colombo |
| De Silva & Fernando (2022) | Smart card analytics, Sri Lanka |
