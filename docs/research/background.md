---
sidebar_position: 1
title: Background & Related Work
---

# Background, Related Work, and Research Gap

## Theoretical background

Passenger demand forecasting sits at the intersection of transportation science, time-series analysis, and machine learning. Classical approaches treat demand as a stochastic temporal process and apply models such as ARIMA and exponential smoothing (Box & Jenkins, 1976). More recent work exploits the spatial-temporal structure of mobility data using recurrent neural networks, particularly Long Short-Term Memory (LSTM) networks (Hochreiter & Schmidhuber, 1997), graph neural networks (Li et al., 2018), and gradient-boosted trees such as XGBoost (Chen & Guestrin, 2016).

In the public transport domain, demand is typically forecast at one of three levels:

1. **Network-wide ridership** — total boardings across the system
2. **Route-level boardings** — demand on a specific bus or rail line
3. **Stop-level origin–destination flows** — where passengers board and alight

Each level requires different data granularity and modelling assumptions, and the choice of level shapes both the feature set and the operational decisions the forecast can support. This research targets the **route and stop level**.

---

## Related work

### Global literature

A growing body of literature has applied machine learning to public transport demand.

**Toqué et al. (2017)** compared LSTM and Random Forest models for short-term forecasting of passenger flow on Paris's public transport network and reported substantial accuracy gains over ARIMA baselines. This remains one of the clearest direct comparisons between classical and deep learning approaches in the transit domain.

**Ma et al. (2019)** proposed a deep learning architecture combining convolutional and recurrent layers for network-wide passenger flow prediction, demonstrating a spatial-temporal modelling approach that has subsequently been adapted to various transit contexts.

**Li et al. (2018)** introduced diffusion convolutional recurrent neural networks for traffic forecasting, which have since been applied to passenger demand prediction. Their graph-based formulation handles the spatial structure of transport networks explicitly, rather than treating each route or stop as an independent series.

**Wang et al. (2021)** demonstrated that hybrid statistical–ML models outperform single models on noisy or sparse ridership data — a finding directly relevant to Sri Lanka, where ticketing digitisation is recent and data quality is uneven.

### Sri Lankan transport research

Within Sri Lanka, transport research has historically focused on infrastructure economics, road traffic congestion, and survey-based ridership studies (Kumarage, 2014; SLTB, 2019). A small but growing set of studies has begun to apply data analytics.

**Perera and Wickramasinghe (2020)** examined GPS traces from buses to estimate travel times in Colombo — one of the first data-driven analyses of Sri Lankan bus operations.

**De Silva and Fernando (2022)** explored emerging ticketing data for ridership patterns in the Colombo region, demonstrating that smart card data, where available, contains structure that statistical methods can exploit.

These contributions are valuable but partial: they focus on individual data streams, are limited to the Colombo area, and do not produce generalisable demand forecasting frameworks.

---

## Research gap

Despite these contributions, two gaps remain.

**Gap 1 — No generalisable demand forecasting framework for Sri Lanka.**
No published work has produced a generalisable demand forecasting framework that combines multiple Sri Lankan data sources (ticket sales, GPS/AVL traces, weather, calendar events) at the route or stop level.

**Gap 2 — Rural and inter-provincial corridors are underexplored.**
Existing studies tend to focus on the Colombo metropolitan area, leaving rural and inter-provincial corridors largely absent from the research record.

This proposal addresses both gaps by developing and rigorously evaluating a forecasting framework on a set of representative corridors. While accurate forecasts are a prerequisite for any future accessibility-improvement work, the design of mechanisms that translate forecasts into accessibility outcomes is treated as downstream work beyond the scope of this study.

See [Research Gap & Problem Statement](./research-gap) for the full problem statement.

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
| Kumarage (2014) | Sustainable urban transport strategies, Sri Lanka |
| SLTB (2019) | Annual Performance Report, Ministry of Transport |
| Perera & Wickramasinghe (2020) | GPS-based travel time analysis, Colombo |
| De Silva & Fernando (2022) | Smart card data analytics, Sri Lanka |
| Hevner et al. (2004) | Design Science in Information Systems Research |
| Diebold & Mariano (1995) | Comparing Predictive Accuracy (DM test) |
