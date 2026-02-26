const QUESTIONS = [
  {
    "id": 1,
    "section": "4.1 Classification Metrics",
    "text": "Accuracy formula is:",
    "options": [
      "\\(\\frac{TP+TN}{TP+TN+FP+FN}\\)",
      "\\(\\frac{TP}{TP+FP}\\)",
      "\\(\\frac{TP}{TP+FN}\\)",
      "\\(\\frac{TN}{TN+FP}\\)"
    ],
    "answer": 0
  },
  {
    "id": 2,
    "section": "4.1 Classification Metrics",
    "text": "Error rate equals:",
    "options": [
      "\\(1-\\text{Accuracy}\\)",
      "\\(\\text{Recall}\\)",
      "\\(\\text{Precision}\\)",
      "\\(FP+FN\\)"
    ],
    "answer": 0
  },
  {
    "id": 3,
    "section": "4.1 Classification Metrics",
    "text": "Precision measures:",
    "options": [
      "Correct positive predictions",
      "Detected positives",
      "True negatives",
      "Overall accuracy"
    ],
    "answer": 0
  },
  {
    "id": 4,
    "section": "4.1 Classification Metrics",
    "text": "Recall is also called:",
    "options": [
      "Sensitivity",
      "Specificity",
      "NPV",
      "Accuracy"
    ],
    "answer": 0
  },
  {
    "id": 5,
    "section": "4.1 Classification Metrics",
    "text": "Specificity formula is:",
    "options": [
      "\\(\\frac{TN}{TN+FP}\\)",
      "\\(\\frac{TP}{TP+FN}\\)",
      "\\(\\frac{FP}{FP+TN}\\)",
      "\\(\\frac{TN}{TN+FN}\\)"
    ],
    "answer": 0
  },
  {
    "id": 6,
    "section": "4.1 Classification Metrics",
    "text": "NPV measures:",
    "options": [
      "Correct negative predictions",
      "Detected positives",
      "False negatives",
      "Overall accuracy"
    ],
    "answer": 0
  },
  {
    "id": 7,
    "section": "4.1 Classification Metrics",
    "text": "Accuracy fails mainly with:",
    "options": [
      "Imbalanced data",
      "Large datasets",
      "Linear models",
      "Convex loss"
    ],
    "answer": 0
  },
  {
    "id": 8,
    "section": "4.1 Classification Metrics",
    "text": "High recall implies:",
    "options": [
      "Few false negatives",
      "Few false positives",
      "High specificity",
      "High accuracy"
    ],
    "answer": 0
  },
  {
    "id": 9,
    "section": "4.1 Classification Metrics",
    "text": "High precision implies:",
    "options": [
      "Few false positives",
      "Few false negatives",
      "High recall",
      "Balanced classes"
    ],
    "answer": 0
  },
  {
    "id": 10,
    "section": "4.1 Classification Metrics",
    "text": "F\u03b2-score generalizes:",
    "options": [
      "Precision\u2013Recall tradeoff",
      "Accuracy",
      "Specificity",
      "ROC"
    ],
    "answer": 0
  },
  {
    "id": 11,
    "section": "4.1 Classification Metrics",
    "text": "\u03b2>1 in F\u03b2 emphasizes:",
    "options": [
      "Recall",
      "Precision",
      "Specificity",
      "Accuracy"
    ],
    "answer": 0
  },
  {
    "id": 12,
    "section": "4.1 Classification Metrics",
    "text": "\u03b2<1 in F\u03b2 emphasizes:",
    "options": [
      "Precision",
      "Recall",
      "Specificity",
      "Accuracy"
    ],
    "answer": 0
  },
  {
    "id": 13,
    "section": "4.1 Classification Metrics",
    "text": "Confusion matrix rows usually represent:",
    "options": [
      "True labels",
      "Predicted labels",
      "Features",
      "Thresholds"
    ],
    "answer": 0
  },
  {
    "id": 14,
    "section": "4.1 Classification Metrics",
    "text": "False negatives correspond to:",
    "options": [
      "Missed positives",
      "Incorrect negatives",
      "Correct positives",
      "Correct negatives"
    ],
    "answer": 0
  },
  {
    "id": 15,
    "section": "4.1 Classification Metrics",
    "text": "True negatives correspond to:",
    "options": [
      "Correctly rejected negatives",
      "Missed positives",
      "Incorrect positives",
      "Incorrect negatives"
    ],
    "answer": 0
  },
  {
    "id": 16,
    "section": "4.1 Classification Metrics",
    "text": "Precision denominator contains:",
    "options": [
      "Predicted positives",
      "Actual positives",
      "Predicted negatives",
      "Actual negatives"
    ],
    "answer": 0
  },
  {
    "id": 17,
    "section": "4.1 Classification Metrics",
    "text": "Recall denominator contains:",
    "options": [
      "Actual positives",
      "Predicted positives",
      "Actual negatives",
      "Predicted negatives"
    ],
    "answer": 0
  },
  {
    "id": 18,
    "section": "4.1 Classification Metrics",
    "text": "Accuracy weights errors:",
    "options": [
      "Equally",
      "By class frequency",
      "By cost",
      "By threshold"
    ],
    "answer": 0
  },
  {
    "id": 19,
    "section": "4.1 Classification Metrics",
    "text": "Metric best for screening tests:",
    "options": [
      "Recall",
      "Precision",
      "Accuracy",
      "Specificity"
    ],
    "answer": 0
  },
  {
    "id": 20,
    "section": "4.1 Classification Metrics",
    "text": "Metric best when FP costly:",
    "options": [
      "Precision",
      "Recall",
      "Accuracy",
      "NPV"
    ],
    "answer": 0
  },
  {
    "id": 21,
    "section": "4.1 Classification Metrics",
    "text": "Metric best when FN costly:",
    "options": [
      "Recall",
      "Precision",
      "Accuracy",
      "Specificity"
    ],
    "answer": 0
  },
  {
    "id": 22,
    "section": "4.1 Classification Metrics",
    "text": "Balanced accuracy averages:",
    "options": [
      "TPR and TNR",
      "Precision and Recall",
      "FP and FN",
      "TP and TN"
    ],
    "answer": 0
  },
  {
    "id": 23,
    "section": "4.1 Classification Metrics",
    "text": "Sensitivity equals:",
    "options": [
      "TPR",
      "FPR",
      "TNR",
      "NPV"
    ],
    "answer": 0
  },
  {
    "id": 24,
    "section": "4.1 Classification Metrics",
    "text": "Specificity equals:",
    "options": [
      "TNR",
      "TPR",
      "FPR",
      "NPV"
    ],
    "answer": 0
  },
  {
    "id": 25,
    "section": "4.1 Classification Metrics",
    "text": "Accuracy ignores:",
    "options": [
      "Error type asymmetry",
      "True positives",
      "True negatives",
      "Dataset size"
    ],
    "answer": 0
  },
  {
    "id": 26,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC curve plots:",
    "options": [
      "TPR vs FPR",
      "Precision vs Recall",
      "Accuracy vs threshold",
      "Loss vs epoch"
    ],
    "answer": 0
  },
  {
    "id": 27,
    "section": "4.1.2 ROC & AUC",
    "text": "TPR equals:",
    "options": [
      "\\(\\frac{TP}{TP+FN}\\)",
      "\\(\\frac{TP}{TP+FP}\\)",
      "\\(\\frac{TN}{TN+FP}\\)",
      "\\(\\frac{FP}{FP+TN}\\)"
    ],
    "answer": 0
  },
  {
    "id": 28,
    "section": "4.1.2 ROC & AUC",
    "text": "FPR equals:",
    "options": [
      "\\(\\frac{FP}{FP+TN}\\)",
      "\\(\\frac{FN}{TP+FN}\\)",
      "\\(\\frac{FP}{TP+FP}\\)",
      "\\(\\frac{TN}{TN+FN}\\)"
    ],
    "answer": 0
  },
  {
    "id": 29,
    "section": "4.1.2 ROC & AUC",
    "text": "Random classifier AUC:",
    "options": [
      "0.5",
      "0",
      "1",
      "0.25"
    ],
    "answer": 0
  },
  {
    "id": 30,
    "section": "4.1.2 ROC & AUC",
    "text": "Perfect classifier ROC point:",
    "options": [
      "(0,1)",
      "(1,0)",
      "(0,0)",
      "(1,1)"
    ],
    "answer": 0
  },
  {
    "id": 31,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC curves are:",
    "options": [
      "Threshold-independent",
      "Cost-sensitive",
      "Class-balanced",
      "Model-specific"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "section": "4.1.2 ROC & AUC",
    "text": "AUC measures:",
    "options": [
      "Ranking quality",
      "Accuracy",
      "Loss",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 33,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC insensitive to:",
    "options": [
      "Class imbalance",
      "Threshold choice",
      "Label noise",
      "Overfitting"
    ],
    "answer": 0
  },
  {
    "id": 34,
    "section": "4.1.2 ROC & AUC",
    "text": "Diagonal ROC line means:",
    "options": [
      "Random guessing",
      "Perfect model",
      "Overfitting",
      "Underfitting"
    ],
    "answer": 0
  },
  {
    "id": 35,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC convex hull represents:",
    "options": [
      "Best achievable performance",
      "Average classifier",
      "Worst model",
      "Noise"
    ],
    "answer": 0
  },
  {
    "id": 36,
    "section": "4.1.2 ROC & AUC",
    "text": "AUC=1 implies:",
    "options": [
      "Perfect ranking",
      "Perfect accuracy",
      "No errors",
      "No variance"
    ],
    "answer": 0
  },
  {
    "id": 37,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC dominated curve means:",
    "options": [
      "Inferior classifier",
      "Superior classifier",
      "Random classifier",
      "Balanced classifier"
    ],
    "answer": 0
  },
  {
    "id": 38,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC curves cross when:",
    "options": [
      "Different tradeoffs",
      "Same classifier",
      "Same threshold",
      "Balanced data"
    ],
    "answer": 0
  },
  {
    "id": 39,
    "section": "4.1.2 ROC & AUC",
    "text": "PR curves preferred when:",
    "options": [
      "Data imbalanced",
      "Data balanced",
      "Regression tasks",
      "Multiclass tasks"
    ],
    "answer": 0
  },
  {
    "id": 40,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC FPR axis equals:",
    "options": [
      "1\u2212Specificity",
      "Recall",
      "Precision",
      "Accuracy"
    ],
    "answer": 0
  },
  {
    "id": 41,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC TPR axis equals:",
    "options": [
      "Recall",
      "Precision",
      "Accuracy",
      "Specificity"
    ],
    "answer": 0
  },
  {
    "id": 42,
    "section": "4.1.2 ROC & AUC",
    "text": "Macro ROC averages:",
    "options": [
      "Per-class ROC",
      "Global ROC",
      "Weighted ROC",
      "Binary ROC"
    ],
    "answer": 0
  },
  {
    "id": 43,
    "section": "4.1.2 ROC & AUC",
    "text": "Micro ROC aggregates:",
    "options": [
      "Global TP/FP",
      "Per-class ROC",
      "Minority classes",
      "Thresholds"
    ],
    "answer": 0
  },
  {
    "id": 44,
    "section": "4.1.2 ROC & AUC",
    "text": "Weighted ROC uses:",
    "options": [
      "Class frequencies",
      "Equal weights",
      "Thresholds",
      "Loss"
    ],
    "answer": 0
  },
  {
    "id": 45,
    "section": "4.1.2 ROC & AUC",
    "text": "AUC robust to:",
    "options": [
      "Threshold selection",
      "Feature scaling",
      "Overfitting",
      "Noise"
    ],
    "answer": 0
  },
  {
    "id": 46,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC ignores:",
    "options": [
      "Error costs",
      "Ranking",
      "Thresholds",
      "Labels"
    ],
    "answer": 0
  },
  {
    "id": 47,
    "section": "4.1.2 ROC & AUC",
    "text": "AUC probabilistic meaning:",
    "options": [
      "P(score\u207a>score\u207b)",
      "Accuracy",
      "Recall",
      "Precision"
    ],
    "answer": 0
  },
  {
    "id": 48,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC curve starts at:",
    "options": [
      "(0,0)",
      "(1,0)",
      "(0,1)",
      "(1,1)"
    ],
    "answer": 0
  },
  {
    "id": 49,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC curve ends at:",
    "options": [
      "(1,1)",
      "(0,1)",
      "(1,0)",
      "(0,0)"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "section": "4.1.2 ROC & AUC",
    "text": "ROC slope equals:",
    "options": [
      "Likelihood ratio",
      "Accuracy",
      "Loss",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 51,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "Cohen\u2019s \u03ba measures:",
    "options": [
      "Chance-corrected agreement",
      "Observed accuracy",
      "Correlation",
      "Loss"
    ],
    "answer": 0
  },
  {
    "id": 52,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "Observed agreement symbol:",
    "options": [
      "p\u2092",
      "p\u2091",
      "AUC",
      "R\u00b2"
    ],
    "answer": 0
  },
  {
    "id": 53,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "Expected agreement symbol:",
    "options": [
      "p\u2091",
      "p\u2092",
      "TPR",
      "FPR"
    ],
    "answer": 0
  },
  {
    "id": 54,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "Kappa formula:",
    "options": [
      "\\(\\frac{p_o-p_e}{1-p_e}\\)",
      "\\(p_o-p_e\\)",
      "\\(\\frac{p_e}{p_o}\\)",
      "\\(1-p_e\\)"
    ],
    "answer": 0
  },
  {
    "id": 55,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba=1 means:",
    "options": [
      "Perfect agreement",
      "Random agreement",
      "No agreement",
      "Overfitting"
    ],
    "answer": 0
  },
  {
    "id": 56,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba=0 means:",
    "options": [
      "Chance agreement",
      "Perfect agreement",
      "No errors",
      "Random classifier"
    ],
    "answer": 0
  },
  {
    "id": 57,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "Negative \u03ba means:",
    "options": [
      "Worse than chance",
      "Perfect",
      "Random",
      "Balanced"
    ],
    "answer": 0
  },
  {
    "id": 58,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba affected by:",
    "options": [
      "Class imbalance",
      "Feature scaling",
      "Threshold",
      "Loss"
    ],
    "answer": 0
  },
  {
    "id": 59,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "Kappa adjusts for:",
    "options": [
      "Chance agreement",
      "Error cost",
      "Threshold",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 60,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba preferred over accuracy when:",
    "options": [
      "Imbalanced classes",
      "Balanced classes",
      "Regression",
      "Clustering"
    ],
    "answer": 0
  },
  {
    "id": 61,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba range:",
    "options": [
      "[-1,1]",
      "[0,1]",
      "(-\u221e,1]",
      "[0,\u221e)"
    ],
    "answer": 0
  },
  {
    "id": 62,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba=0.8 interpreted as:",
    "options": [
      "Strong agreement",
      "Random",
      "Poor",
      "Moderate"
    ],
    "answer": 0
  },
  {
    "id": 63,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba assumes:",
    "options": [
      "Independent raters",
      "Same thresholds",
      "Same loss",
      "Same features"
    ],
    "answer": 0
  },
  {
    "id": 64,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "Multiclass \u03ba:",
    "options": [
      "Generalization of binary \u03ba",
      "Undefined",
      "Same as accuracy",
      "Same as AUC"
    ],
    "answer": 0
  },
  {
    "id": 65,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba sensitive to:",
    "options": [
      "Marginal distributions",
      "Feature scaling",
      "Overfitting",
      "Learning rate"
    ],
    "answer": 0
  },
  {
    "id": 66,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba equals accuracy when:",
    "options": [
      "p\u2091=0",
      "p\u2092=0",
      "Classes balanced",
      "Random"
    ],
    "answer": 0
  },
  {
    "id": 67,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba penalizes:",
    "options": [
      "Chance agreement",
      "Errors",
      "Variance",
      "Bias"
    ],
    "answer": 0
  },
  {
    "id": 68,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba robust to:",
    "options": [
      "Class imbalance (partially)",
      "Noise",
      "Threshold",
      "Scaling"
    ],
    "answer": 0
  },
  {
    "id": 69,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba vs accuracy:",
    "options": [
      "More conservative",
      "Less conservative",
      "Identical",
      "Random"
    ],
    "answer": 0
  },
  {
    "id": 70,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba recommended in:",
    "options": [
      "Medical diagnosis",
      "Regression",
      "Clustering",
      "Feature selection"
    ],
    "answer": 0
  },
  {
    "id": 71,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba uses confusion matrix:",
    "options": [
      "Yes",
      "No",
      "Only TP",
      "Only FP"
    ],
    "answer": 0
  },
  {
    "id": 72,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba undefined when:",
    "options": [
      "Single class",
      "Balanced data",
      "Large n",
      "Perfect model"
    ],
    "answer": 0
  },
  {
    "id": 73,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba interprets agreement:",
    "options": [
      "Beyond chance",
      "Exact",
      "Probabilistic",
      "Conditional"
    ],
    "answer": 0
  },
  {
    "id": 74,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba corrects for:",
    "options": [
      "Random guessing",
      "Bias",
      "Variance",
      "Overfitting"
    ],
    "answer": 0
  },
  {
    "id": 75,
    "section": "4.1.3 Cohen\u2019s Kappa",
    "text": "\u03ba criticized because:",
    "options": [
      "Depends on marginals",
      "Too complex",
      "Uses TP",
      "Uses FP"
    ],
    "answer": 0
  },
  {
    "id": 76,
    "section": "4.1.4 Regression Metrics",
    "text": "MSE formula:",
    "options": [
      "\\(\\frac{1}{n}\\sum (y_i-\\hat y_i)^2\\)",
      "\\(\\sum |y_i-\\hat y_i|\\)",
      "\\(\\sqrt{\\sum (y_i-\\hat y_i)^2}\\)",
      "\\(\\sum (y_i-\\hat y_i)\\)"
    ],
    "answer": 0
  },
  {
    "id": 77,
    "section": "4.1.4 Regression Metrics",
    "text": "RMSE equals:",
    "options": [
      "\u221aMSE",
      "MSE\u00b2",
      "MAE",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 78,
    "section": "4.1.4 Regression Metrics",
    "text": "MAE penalizes errors:",
    "options": [
      "Linearly",
      "Quadratically",
      "Exponentially",
      "Logarithmically"
    ],
    "answer": 0
  },
  {
    "id": 79,
    "section": "4.1.4 Regression Metrics",
    "text": "MSE more sensitive to:",
    "options": [
      "Outliers",
      "Bias",
      "Noise",
      "Scaling"
    ],
    "answer": 0
  },
  {
    "id": 80,
    "section": "4.1.4 Regression Metrics",
    "text": "R\u00b2 measures:",
    "options": [
      "Explained variance",
      "Absolute error",
      "Noise",
      "Bias"
    ],
    "answer": 0
  },
  {
    "id": 81,
    "section": "4.1.4 Regression Metrics",
    "text": "R\u00b2=1 means:",
    "options": [
      "Perfect fit",
      "No fit",
      "Random fit",
      "Overfit"
    ],
    "answer": 0
  },
  {
    "id": 82,
    "section": "4.1.4 Regression Metrics",
    "text": "R\u00b2 can be negative when:",
    "options": [
      "Model worse than mean",
      "Perfect fit",
      "No noise",
      "Balanced data"
    ],
    "answer": 0
  },
  {
    "id": 83,
    "section": "4.1.4 Regression Metrics",
    "text": "MAPE expresses error as:",
    "options": [
      "Percentage",
      "Absolute value",
      "Squared value",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 84,
    "section": "4.1.4 Regression Metrics",
    "text": "MAE unit:",
    "options": [
      "Same as target",
      "Squared target",
      "Normalized",
      "Log-scale"
    ],
    "answer": 0
  },
  {
    "id": 85,
    "section": "4.1.4 Regression Metrics",
    "text": "RMSE penalizes:",
    "options": [
      "Large errors",
      "Small errors",
      "Bias",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 86,
    "section": "4.1.4 Regression Metrics",
    "text": "Regression loss convex:",
    "options": [
      "MSE",
      "MAE",
      "Huber",
      "All"
    ],
    "answer": 0
  },
  {
    "id": 87,
    "section": "4.1.4 Regression Metrics",
    "text": "MSE differentiable:",
    "options": [
      "Yes",
      "No",
      "Sometimes",
      "Only linear"
    ],
    "answer": 0
  },
  {
    "id": 88,
    "section": "4.1.4 Regression Metrics",
    "text": "MAE differentiable at 0:",
    "options": [
      "No",
      "Yes",
      "Sometimes",
      "Only convex"
    ],
    "answer": 0
  },
  {
    "id": 89,
    "section": "4.1.4 Regression Metrics",
    "text": "Huber loss combines:",
    "options": [
      "MAE and MSE",
      "Accuracy and recall",
      "Bias and variance",
      "TP and FP"
    ],
    "answer": 0
  },
  {
    "id": 90,
    "section": "4.1.4 Regression Metrics",
    "text": "RSE equals:",
    "options": [
      "MSE normalized",
      "MAE normalized",
      "RMSE",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 91,
    "section": "4.1.4 Regression Metrics",
    "text": "RAE equals:",
    "options": [
      "MAE normalized",
      "MSE normalized",
      "RMSE",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 92,
    "section": "4.1.4 Regression Metrics",
    "text": "Regression metrics require:",
    "options": [
      "Continuous target",
      "Binary target",
      "Discrete labels",
      "Classes"
    ],
    "answer": 0
  },
  {
    "id": 93,
    "section": "4.1.4 Regression Metrics",
    "text": "MAE robust to:",
    "options": [
      "Outliers",
      "Noise",
      "Scaling",
      "Bias"
    ],
    "answer": 0
  },
  {
    "id": 94,
    "section": "4.1.4 Regression Metrics",
    "text": "RMSE vs MAE:",
    "options": [
      "RMSE penalizes large errors more",
      "Same behavior",
      "MAE larger",
      "RMSE smaller"
    ],
    "answer": 0
  },
  {
    "id": 95,
    "section": "4.1.4 Regression Metrics",
    "text": "R\u00b2 baseline model:",
    "options": [
      "Predict mean",
      "Predict zero",
      "Predict median",
      "Random"
    ],
    "answer": 0
  },
  {
    "id": 96,
    "section": "4.1.4 Regression Metrics",
    "text": "R\u00b2 depends on:",
    "options": [
      "Variance of y",
      "Scaling of x",
      "Learning rate",
      "Epochs"
    ],
    "answer": 0
  },
  {
    "id": 97,
    "section": "4.1.4 Regression Metrics",
    "text": "MAPE undefined when:",
    "options": [
      "y=0",
      "\u0177=0",
      "Noise",
      "Large n"
    ],
    "answer": 0
  },
  {
    "id": 98,
    "section": "4.1.4 Regression Metrics",
    "text": "RMSE units:",
    "options": [
      "Same as target",
      "Squared target",
      "Normalized",
      "Dimensionless"
    ],
    "answer": 0
  },
  {
    "id": 99,
    "section": "4.1.4 Regression Metrics",
    "text": "MAE minimized by:",
    "options": [
      "Median",
      "Mean",
      "Mode",
      "Zero"
    ],
    "answer": 0
  },
  {
    "id": 100,
    "section": "4.1.4 Regression Metrics",
    "text": "MSE minimized by:",
    "options": [
      "Mean",
      "Median",
      "Mode",
      "Zero"
    ],
    "answer": 0
  },
  {
    "id": 101,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Hold-out validation splits data into:",
    "options": [
      "Train/Test",
      "Train only",
      "Test only",
      "Bootstrap"
    ],
    "answer": 0
  },
  {
    "id": 102,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "k-fold CV divides data into:",
    "options": [
      "k folds",
      "k samples",
      "k models",
      "k tests"
    ],
    "answer": 0
  },
  {
    "id": 103,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Each fold used for testing:",
    "options": [
      "Once",
      "Twice",
      "k times",
      "Never"
    ],
    "answer": 0
  },
  {
    "id": 104,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "LOOCV k equals:",
    "options": [
      "n",
      "n-1",
      "1",
      "log n"
    ],
    "answer": 0
  },
  {
    "id": 105,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Nested CV used for:",
    "options": [
      "Hyperparameter tuning",
      "Final training",
      "Testing only",
      "Bootstrapping"
    ],
    "answer": 0
  },
  {
    "id": 106,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "CV reduces:",
    "options": [
      "Variance",
      "Bias",
      "Noise",
      "Overfitting"
    ],
    "answer": 0
  },
  {
    "id": 107,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Increasing k in CV:",
    "options": [
      "Reduces bias",
      "Reduces variance",
      "Increases bias",
      "Increases error"
    ],
    "answer": 0
  },
  {
    "id": 108,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "LOOCV variance is:",
    "options": [
      "High",
      "Low",
      "Zero",
      "Constant"
    ],
    "answer": 0
  },
  {
    "id": 109,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Repeated CV improves:",
    "options": [
      "Stability",
      "Bias",
      "Noise",
      "Speed"
    ],
    "answer": 0
  },
  {
    "id": 110,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Stratified CV preserves:",
    "options": [
      "Class proportions",
      "Feature scaling",
      "Noise",
      "Variance"
    ],
    "answer": 0
  },
  {
    "id": 111,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Test set must be:",
    "options": [
      "Held out",
      "Resampled",
      "Normalized",
      "Balanced"
    ],
    "answer": 0
  },
  {
    "id": 112,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Validation set used for:",
    "options": [
      "Model selection",
      "Final evaluation",
      "Training",
      "Bootstrapping"
    ],
    "answer": 0
  },
  {
    "id": 113,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Hyperparameter tuning on test set:",
    "options": [
      "Data leakage",
      "Correct",
      "Required",
      "Efficient"
    ],
    "answer": 0
  },
  {
    "id": 114,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Statistical tests compare:",
    "options": [
      "Algorithms",
      "Features",
      "Classes",
      "Thresholds"
    ],
    "answer": 0
  },
  {
    "id": 115,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Paired t-test assumes:",
    "options": [
      "Normality",
      "Independence",
      "Equal folds",
      "No variance"
    ],
    "answer": 0
  },
  {
    "id": 116,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Wilcoxon test is:",
    "options": [
      "Non-parametric",
      "Parametric",
      "Asymptotic",
      "Exact"
    ],
    "answer": 0
  },
  {
    "id": 117,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Friedman test used for:",
    "options": [
      "Multiple algorithms",
      "Two algorithms",
      "Single model",
      "Features"
    ],
    "answer": 0
  },
  {
    "id": 118,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "ANOVA assumes:",
    "options": [
      "Normality",
      "No noise",
      "Imbalance",
      "Convexity"
    ],
    "answer": 0
  },
  {
    "id": 119,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "CV bias arises from:",
    "options": [
      "Reuse of data",
      "Small dataset",
      "Large k",
      "Randomness"
    ],
    "answer": 0
  },
  {
    "id": 120,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "CV variance arises from:",
    "options": [
      "Data splits",
      "Loss function",
      "Optimizer",
      "Model"
    ],
    "answer": 0
  },
  {
    "id": 121,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Model selection must be:",
    "options": [
      "Separate from testing",
      "On test set",
      "On training",
      "Random"
    ],
    "answer": 0
  },
  {
    "id": 122,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Bootstrap resampling uses:",
    "options": [
      "Sampling with replacement",
      "Without replacement",
      "Fixed folds",
      "Hold-out"
    ],
    "answer": 0
  },
  {
    "id": 123,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Bootstrap estimates:",
    "options": [
      "Variance",
      "Bias",
      "Accuracy",
      "Loss"
    ],
    "answer": 0
  },
  {
    "id": 124,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Repeated hold-out reduces:",
    "options": [
      "Variance",
      "Bias",
      "Noise",
      "Overfitting"
    ],
    "answer": 0
  },
  {
    "id": 125,
    "section": "4.2 Evaluation of ML Algorithms",
    "text": "Final test set used:",
    "options": [
      "Once",
      "Repeatedly",
      "In CV",
      "For tuning"
    ],
    "answer": 0
  }
];