

import express from "express";
import multer from 'multer';
import fs from 'fs/promises';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Define the route for the getHighlights endpoint
router.get('/', (req, res) => {
  // Your code to generate personalized red, orange, and green flags goes here

  // Return the flags as JSON
  res.json({
    "Red flags": [
    {
    "flag": "This rent price is 20% higher than the local market average.",
    "category": "rent amount"
    },
    {
    "flag": "This pet policy may be disadvantageous to the tenant and is stricter than local law.",
    "category": "pet policy"
    },
    {
    "flag": "This renewal clause favors the landlord and is not in line with local law.",
    "category": "renewal clause"
    }
    ],
    "Orange flags": [
    {
    "flag": "This late payment penalty is 1.5x higher than the maximum allowed by local law.",
    "category": "late payment penalty"
    },
    {
    "flag": "This lease term is longer than the average in the local market.",
    "category": "lease term"
    },
    {
    "flag": "This notice period for move-out is shorter than the minimum required by local law.",
    "category": "notice period"
    }
    ],
    "Green flags": [
    {
    "flag": "This clause places maintenance responsibilities on the landlord, which is in line with local law.",
    "category": "maintenance responsibilities"
    },
    {
    "flag": "This security deposit is in line with the local market average.",
    "category": "security deposit"
    },
    {
    "flag": "This rent increase clause is in line with the average in the local market.",
    "category": "rent increase clause"
    }
    ]
    });
});



export default router;
