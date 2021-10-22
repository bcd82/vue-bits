import axios from 'axios';
import { saveToStorage,loadFromStorage } from './storage.service';

const RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value=1'

export async function getRate() { 
   // return $ to btc rate
    const rate = loadFromStorage('rate') ||  await axios.get(RATE_URL)
    saveToStorage('rate',rate)
    return rate.data
}

export async function getMarketPrice(){
    
}
export async function getConfirmedTransactions(){

}
