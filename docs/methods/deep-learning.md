---
sidebar_position: 4
title: Deep Learning Methods
---

# Deep Learning Methods

## Overview

Deep learning methods can capture complex non-linear temporal patterns and, in their graph-based extensions, spatial dependencies between stops and routes. They require more data and computation than statistical or ML methods — making them the most uncertain candidates in the Sri Lankan context, where data quality is uneven.

---

## LSTM

**What it does:** Long Short-Term Memory networks are recurrent neural networks designed to learn long-range dependencies in sequential data. An LSTM cell uses three gates — forget, input, output — to selectively retain or discard information from previous time steps:

The hidden state at each step integrates the current input with a selective memory of past inputs, allowing the model to capture patterns at multiple time scales simultaneously (daily, weekly, seasonal).

**Architecture used:** Stacked LSTM layers (2–3 layers deep) with dropout regularisation, followed by a dense output layer producing the forecast.

**Input:** Feature matrix of shape `(batch, sequence_length, n_features)` where sequence length is the lookback window (e.g., 7 days of hourly data = 168 steps).

**Output:** Single-step or multi-step demand forecast.

**Implementation:** `PyTorch` with custom training loop; early stopping on validation loss.

---

## Sequence-to-Sequence (Seq2Seq)

**What it does:** An encoder-decoder LSTM architecture where the encoder processes the input sequence and produces a context vector, which the decoder uses to generate a forecast sequence of arbitrary length.

```
Input sequence ──▶ Encoder LSTM ──▶ Context vector ──▶ Decoder LSTM ──▶ Forecast sequence
```

**Advantage over single-step LSTM:** Directly produces multi-step forecasts — e.g., the full next 24 hours — rather than rolling one-step forecasts forward (which accumulates error).

**Implementation:** `PyTorch`; teacher forcing during training, autoregressive decoding at inference.

---

## Graph Neural Network (optional)

**What it does:** Models the transport network as a graph where nodes are stops/routes and edges represent spatial adjacency or connectivity. A Diffusion Convolutional RNN (DCRNN, Li et al. 2018) propagates demand signals across the graph using graph diffusion convolutions, then processes the result with an RNN.

**When it will be included:** Only if Phase 2 EDA shows significant spatial autocorrelation between stops — i.e., that knowing demand at one stop provides meaningful information about demand at neighbouring stops. If spatial patterns are weak, the additional complexity is not justified.

**Implementation:** `PyTorch Geometric` or the reference DCRNN implementation; requires a graph adjacency matrix derived from the route network.

---

## Training setup

| Aspect | Detail |
|---|---|
| Optimiser | Adam with learning rate scheduling |
| Loss function | MAE (robust to outliers from data quality issues) |
| Regularisation | Dropout (0.1–0.3), early stopping on validation MAE |
| Normalisation | Min-max scaling per feature; inverse-transformed for evaluation |
| Hardware | GPU (cloud compute credits budgeted) |
| Hyperparameter search | Bayesian optimisation via `optuna` |

---

## Reference

Li, Y., Yu, R., Shahabi, C., & Liu, Y. (2018). Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting. *International Conference on Learning Representations (ICLR)*.
