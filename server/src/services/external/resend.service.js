import {Resend} from 'resend';
import { CONFIG } from '../../config/dotenv.config.js';

const resend = new Resend(CONFIG.RESEND_API_KEY);

export default resend;