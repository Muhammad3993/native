// src/screens/PaywallScreen.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { LinearTextGradient } from 'react-native-text-gradient';


const xml = `<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="m 12 2 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 l -6 6 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 l 6 6 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 s -0.105469 -0.519531 -0.292969 -0.707031 l -5.292969 -5.292969 l 5.292969 -5.292969 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 z m 0 0" fill="#ED217C"/>
            </svg>`
const xml1 = `<svg width="100%" height="260px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 933.4 856.5">
                <path class="cls-1" d="M173.8,344.1c5.1-10.6,12.7-12.7,23.7-12.6,13.7.7,27.6.1,41.3.2,2.4,0,4.9.6,8.1,1-4.6,19.5-8.8,38.2-13.3,56.9-5.8,24.5-11.5,49-18,73.4-.9,3.3-6.2,7.5-9.7,7.8-12.4,1-24.9.4-38.6.4,5.9-25.6,11.5-50.1,18.1-78.4-13,20.1-23.9,36.8-34.7,53.5-3.2,4.9-6.4,9.8-9.5,14.7-6.6,10.3-14.7,13.1-28,9-4.3-24.9-8.6-50.3-13.5-78.8-6.3,26.5-11.7,50.1-17.7,73.5-.7,2.6-4.9,6.1-7.7,6.2-12.9.7-25.8.3-40.5.3h0c11.3-47.2,22.3-93.1,33.4-139.1h62.3c3.4,21.2,6.7,42.2,10.4,65.1" fill="#ED217C"/>
                <path class="cls-1" d="M779.7,471.1c4.1-17.9,8-34.7,12.1-52.3h-52.3c-4.1,16.8-8.4,34-12.7,51.7h-46.5c11.1-46.3,22-92.1,33.1-138.2h46.7c-3.8,16.3-7.5,32-11.5,49h30.2c14.8,0,23.8-7,27.2-21.1,1.1-4.4,2.8-8.8,3.2-13.2,1.2-11.5,5.5-17.1,18.5-14.7,9.6,1.7,19.7.3,30.3.3,0,2.5.5,5,0,7.1-10,42.1-20.1,84.1-30.6,126.1-.5,2.2-4.3,5-6.6,5.1-13.2.5-26.4.2-41,.2h-.1Z" fill="#ED217C"/>
                <path class="cls-1" d="M392,470.6h-47.6c-.9-5.6-1.8-10.8-2.6-16.4-18.8,0-36.9-.6-54.9.5-3.1.2-5.7,7.4-8.7,11.3-1.4,1.8-3.3,4.6-5,4.7-16.4.4-32.9.2-50.4.2,7.1-11.3,13.9-22.2,20.8-33,21.7-33.9,43.4-67.8,65.3-101.6,1.2-1.8,4-3.5,6.1-3.6,16.2-.6,32.4-.9,48.7-.8,2.4,0,6.5,2.8,6.8,4.7,6.2,36.3,12,72.7,17.8,109.1,1.3,8.1,2.4,16.2,3.6,24.9h.1ZM338.5,417.5c-1.5-15.8-2.9-30.8-4.5-47.8-9.6,16.8-18.1,31.9-27.2,47.8h31.7Z" fill="#ED217C"/>
                <path class="cls-1" d="M693.4,376c-17.6,5.1-32.1,9.4-46.2,13.5-12.4-19.1-22.5-24.2-39.6-20.7-17.3,3.5-29.1,15.7-31.8,33.6-1.7,11,1.5,20.5,11,26.9,12,8.1,24.9,9,38.1,2.6.5-.2,1.1-.5,1.4-.9,10.8-12.4,21.2-7.8,32,.2,5.2,3.9,11,6.8,16.9,10.4-11.2,15.3-26,24-43.2,28.5-26.5,6.9-52.3,5-75.9-9.4-34.4-21.1-39.7-66.6-12.4-98.8,31.2-36.8,92.4-43.4,129.5-12.9,7.8,6.4,12.6,16.6,20.1,27h.1Z" fill="#ED217C"/>
                <path class="cls-1" d="M537.9,333.2h0c-2.9,11.9-5.5,23.4-8.7,34.6-.3,1.2-3.8,2.2-5.8,2.2-11.1.2-22.2.1-34.7.1-3.3,14-6.6,27.9-9.9,41.8-4.4,18.4-8.8,36.8-13.4,55.2-.4,1.4-2,3.6-3,3.6-14.5.2-28.9.2-44.6.2,8.1-33.7,16-66.6,24.1-100.7h-40.6c3.4-12.9,6.2-24.4,9.5-35.8.3-1.1,3-2.2,4.6-2.2" fill="#ED217C"/>
                <path class="cls-1" d="M929.7,332.5c-4.7,15.4-9,29.9-13.5,44.4-4,12.8-7.8,25.6-12.3,38.1-.8,2.2-4.6,4.6-7.2,4.7-10.2.5-20.4.2-31.7.2,1.8-10.1,3.5-19.6,5.1-29.2,2.8-17.1,5.3-34.3,8.7-51.3.5-2.7,5-6.5,7.8-6.6,13.9-.7,27.8-.3,43.1-.3h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M878.9,429.1c13,0,22.1,8.6,22.1,20.7s-12.6,24.4-26.8,24.5c-11.7.1-22.7-10.4-22.7-21.7s12.5-23.7,27.5-23.6h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M710.5,534.5c4.2-17.3,8.4-34.5,12.7-51.9h58.8c-4.3,17.5-8.4,34.4-12.6,52h40.7c4.5-18.2,9-36.3,13.5-54.4,1.4.4,2.9.9,4.3,1.3-4.6,19-9.2,37.9-13.9,57.4h-50.3c4.1-17.6,8-34.6,12.1-52h-48.8c-3.8,15.9-7.5,31.7-11.5,47.4-.5,1.8-2.5,4.6-3.8,4.7-15.5.3-30.9.2-47.8.2,4.9-19.9,9.7-39.1,14.4-58.4,1.4.3,2.8.6,4.2,1-4.1,17.4-8.2,34.8-12.4,52.9h40.4v-.2h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M213.9,534.7c15.4,0,29.8.9,44-.6,3.6-.4,6.1-8.5,9.8-12.5,2.2-2.4,5.6-5,8.5-5.1,18-.5,36.1-.2,54.8-.2.9,6.4,1.6,12.1,2.5,18.2h41.8c-2.9-18-5.6-35.5-8.9-55.6,3.3,2.5,5.4,3.3,5.6,4.3,3,17.6,5.7,35.3,8.5,53,.1.6-.3,1.3-.8,3.2-12.5,0-25.3-.8-37.9.2-10.7.9-14.6-3-14.5-13.3,0-1.7-3.7-4.9-5.8-4.9-13.6-.4-27.4-.6-41,.3-3.9.2-9.4,3.2-11,6.5-4.1,8.4-9.4,11.9-18.9,11.4-14.4-.8-28.9-.2-45.2-.2,13.6-21,26.2-40.4,38.9-59.9,1.2.8,2.4,1.5,3.6,2.3-11.1,17.3-22.1,34.7-33.8,52.9h-.2Z" fill="#ED217C"/>
                <path class="cls-1" d="M664.1,506.6c-19,30.8-71,45.7-114.4,25.7-22.5-10.4-42.6-39-34.9-54.5,7.1,35.6,29,53,61.2,57.8,31.3,4.7,59.3-2.1,81.8-27.4-10.5-6.2-20.6-12.2-31-18.5-16.5,15.7-35,20.1-54.9,7.6-5.2-3.3-8.5-9.6-11.8-16.6,21,26.3,42.3,25.7,65.7,3.3,12.2,7.2,25.1,14.8,38.3,22.5h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M750.1,604.7c4-17.2,7.9-33.7,12-51.6-11.7,0-22.5,1.1-32.8-.3-14.5-2-20.8,3.5-22.2,17.7-1,9.7-3.8,19.3-6.6,28.7-.8,2.5-4.5,5.8-7.1,5.9-13.9.6-27.8.3-43,.3,4.7-19.5,9-37.9,13.4-56.2,1,.2,2,.5,3,.7-4.2,17.4-8.3,34.8-12.7,52.8h42.3c3.8-15.8,7.4-31.4,11.3-46.9.5-2,2.4-5.2,3.8-5.3,17.5-.3,35.1-.2,54.4-.2-4.3,18.2-8.2,34.8-12.2,52.2,13.8,0,27.3,0,40.7-.2,1.1,0,2.6-3.1,3.1-5,3.8-15.2,7.4-30.4,11.1-45.6.2-.9.8-1.7,3.2-2-4.4,18.3-8.8,36.7-13.3,55.3h-48.4v-.3h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M315.1,604.7c-1-5.8-1.9-11-2.8-16.5h-30.4c-6.2,0-12.6-1-18.7-.3-3,.3-7.4,2.7-8.4,5.2-3.7,9.4-9.3,13.2-19.8,12.5-13.5-1-27.1-.2-42.4-.2,12.8-19.9,24.7-38.4,36.5-56.8.8.5,1.6,1,2.4,1.5-11.2,17.4-22.4,34.7-33.7,52.2,15.9,0,31.2.5,46.4-.5,2.9-.2,4.9-7.2,8.1-10.2,3.2-2.9,7.4-6.4,11.3-6.6,14.6-.8,29.3-.8,44,0,3.1.2,6.6,4.5,8.7,7.6,1.5,2.3,1,6,1.5,9.4h43.4c-2.9-18-5.6-35.5-8.4-53,1-.2,2-.3,3-.5,3,18.5,5.9,36.9,9,56h-49.7v.2h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M499.8,548.5c9.8,43.9,41.4,56.6,80.9,56.3,24.6,0,46.4-8.7,63.4-29.4-11-6.4-21.2-12.6-31.8-18.1-1.2-.6-4.9,2.7-7,4.7-15.9,15.2-46.2,11.1-57.1-7.9-.8-1.5-1.2-3.2.6-7,.6,1.5,1,3.1,1.9,4.5,11.9,19.6,37.6,22.3,54.5,6.5,2.5-2.4,9.2-3.1,12.5-1.5,10.2,5.1,19.8,11.6,29.5,17.5-13.4,25.6-64.5,45.8-109.5,25.8-23.9-10.6-44.7-38.1-38-51.7h0v.3h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M197.4,534.5c4.6-18.2,9.2-36.4,13.8-54.5,1.4.4,2.8.8,4.2,1.2-2.3,9.5-4.7,19.1-7,28.6-1.7,7.2-2.6,14.7-5.4,21.5s-6.2,7.4-9.7,7.6c-13.7.9-27.4.4-42.6.4,5.1-20.5,10-39.8,14.8-59,1.4.3,2.8.7,4.2,1-4.2,17.5-8.4,35.1-12.8,53.1h40.5,0Z" fill="#ED217C"/>
                <path class="cls-1" d="M465.9,481.6c-4.5,19-9,37.9-13.6,57.2h-50.8c5-19.9,9.8-39.3,14.7-58.6,1.4.3,2.8.7,4.2,1-2.1,8.7-4.3,17.4-6.4,26.2s-4,17.6-6.2,27.1h40.4c4.5-18,9-36.1,13.6-54.2,1.4.5,2.7.9,4.1,1.3h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M17.7,539.4c5.1-20.6,9.8-39.9,14.6-59.1,1.4.4,2.8.8,4.2,1.1-4.1,17.4-8.2,34.8-12.5,53h40.4c4.5-17.9,9.1-36,13.6-54.1,1.4.4,2.8.8,4.3,1.3-2.1,8.8-4.3,17.7-6.4,26.5-1.9,8-3.3,16.2-6.1,23.9-1.1,3.1-5.4,6.9-8.4,7-14,.8-28.1.3-43.5.3h-.2Z" fill="#ED217C"/>
                <path class="cls-1" d="M158.4,481.9c-11.9,18.5-22.9,37.7-36.4,54.9-3.4,4.4-15,2.4-23.7,3.5-3.5-20.7-6.8-39.8-10-59,1.5-.3,2.9-.6,4.4-1,3.2,18,6.4,36,9.6,54.1,9,.6,16.6,2.6,22.1-7.6,7.9-14.6,17.6-28.2,26.7-42.1,1.3-2,3.8-3.2,5.7-4.7l1.6,1.9h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M861.1,541.2c-14.5,0-24.7-9.5-24.8-23,0-12.9,14.5-25.8,28.9-25.6,13,.1,23.9,10.6,23.9,22.9s-11.8,25.8-28,25.8h0ZM861.4,536.8c12.4,0,23.2-9.7,23.2-20.9s-8.8-18.9-19.2-18.9-24.4,10-24.3,21.9c0,10.5,8.5,17.8,20.3,17.8h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M404.5,549.8c-4.1,17.2-8.1,34.4-12.4,52.2h42.1c4.3-17.8,8.6-35.5,13-53.3l2.9.7c-1.8,7.4-3.5,14.8-5.3,22.1-1.6,6.8-4.2,13.5-4.6,20.4-.8,11.6-6.3,14.5-17.1,13.5-11-1-22.1-.2-34.9-.2,4.6-19.5,9-37.8,13.3-56.1,1,.2,2,.5,3,.7h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M20.4,549.2c-4.1,17.4-8.1,34.8-12.4,52.9h42.3c4.3-17.9,8.6-35.6,12.9-53.2l2.5.5c-1.4,6.7-2.8,13.4-4.3,20-2.4,10.4-4.9,20.8-7.7,31.1-.4,1.7-2.1,4.4-3.2,4.4-15,.3-30.1.2-46.4.2,4.7-19.3,9.2-37.9,13.6-56.4.9.2,1.8.4,2.6.6h.1Z" fill="#ED217C"/>
                <path class="cls-1" d="M186.1,604.8h-48.5c4.6-19.3,8.9-37.7,13.3-56.2.9.2,1.8.4,2.7.6-2,8.6-4,17.2-6.1,25.8-2.1,8.8-4.1,17.7-6.5,27.7h10.8c9,0,17.9.7,26.9.3,2.1,0,5.3-2.8,5.9-4.8,3.9-15,7.3-30.2,10.9-45.2.4-1.5,1.2-2.9,3.9-3.8-4.4,18.4-8.7,36.8-13.2,55.7h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M873.6,583c0,13.4-13.4,25.8-27.6,25.6-13.2-.2-23.5-10-23.5-22.2s12.5-25.4,27.5-25.5c12.4,0,23.7,10.5,23.7,22.2h-.1ZM846,605.2c13.4,0,24.3-9.8,24.4-21.8,0-10.9-8.8-19.7-20-19.5-14.1,0-24.7,10-24.7,23s8.3,18.4,20.2,18.3h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M86.3,602.3c9.7.3,18.6,2.9,24.7-8.7,7.8-14.6,17.8-28.1,26.8-42.1.8-1.3,1.4-2.8,4.4-2.2-2.9,4.8-5.8,9.6-8.9,14.3-8.1,12.6-15,26.2-24.9,37.1-4,4.4-14.3,3.6-21.8,3.8-1.5,0-3.9-6.1-4.6-9.6-2.7-13.8-4.8-27.8-7.1-41.6-.2-1.2,0-2.5,2.4-4.2,2.9,17.5,5.8,35,8.8,53.1h.2,0Z" fill="#ED217C"/>
                <path class="cls-1" d="M892.7,482.2c-1.2,1.7-2.1,4.5-3.2,4.5-12.9.3-25.9.2-39.2.2v-4.7h42.4Z" fill="#ED217C"/>
                <path class="cls-1" d="M285.8,485.8c4.1-2.8,5.6-4.8,7.1-4.8,11.2.2,22.5.9,34.5,1.4,0,.1.3,1.4.8,3.4h-42.4Z" fill="#ED217C"/>
                <path class="cls-1" d="M312.2,551.8h-36.3v-1.9h36.2c0,.7,0,1.3.1,1.9h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M836.5,553.7v-3.5h39.5c-.9,1.2-1.7,3.3-2.6,3.3-12.2.2-24.3.2-36.9.2h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M566.9,296.4c-3.4,0-5.5-1.6-6.4-4.7,0-.4-.2-.8-.3-1.2-.5-1.8-1.8-2.8-3.5-2.3-4.1,1-8.2.4-12.3.6h-3.4c-1.6,0-2.7.8-3.5,2-.3.5-.6,1-.8,1.5-1.4,3-3.7,4.5-7.2,4.2-2-.2-4,0-6-.1-1.4,0-2-1.1-1.3-2.4.4-.9.9-1.8,1.6-2.5,1.5-1.4,2.4-3.1,3.3-4.9.4-.9,1-1.7,1.5-2.5,2.5-3.8,5-7.5,7.5-11.3.8-1.2,1.5-2.4,2.3-3.6,3.2-4.2,6.1-8.6,8.6-13.2,1-1.9,2.6-3.4,4.2-4.8.6-.5,1.5-.8,2.3-.8,2.8-.1,5.7,0,8.5,0s2.4.8,2.8,2.1c1.1,2.9,1.6,6,2,9.1.2,1.7.4,3.4.7,5,1.6,8.9,3.3,17.8,5,26.8.4,2-.3,2.9-2.4,3.1h-3.4.2ZM551.3,279.3h5.1c1.6,0,2.4-.9,2.1-2.5-.5-2.4-.7-4.7-.9-7.1-.2-2-.6-3.9-1-5.8,0-.4-.7-.9-1.1-1.1-.2-.1-.8.2-1,.5-2.3,3.7-4.8,7.3-6.9,11.2-2.9,5.2-3,4.9,3,4.9h.9-.2,0Z" fill="#ED217C"/>
                <path class="cls-1" d="M484.2,297.3c-2.8-.8-5.9-.8-9-1.8-3-1-5.8-2.3-8.4-3.9-.7-.5-1.5-.9-2.1-1.5-1-.9-1.1-1.9-.5-3.1,1.2-2.2,3-3.7,4.7-5.4.3-.3,1.2-.3,1.6,0,1.4.7,2.8,1.5,4,2.4,2.5,1.8,5.2,2.9,8.3,3.1.8,0,1.7.3,2.5.5,4.1.7,6.4-1.1,7.8-4.3.2-.4,0-1.2-.4-1.5-1.9-1.5-3.9-2.8-6.3-3.5-4-1.1-7.8-2.7-11.4-4.8-3.6-2.1-5.4-5.4-5.4-9.5s.3-2.3.8-3.3c2.2-4.9,5.9-8.3,11.2-9.6,2.3-.6,4.7-1.4,7.1-1.3,6.7.2,13.3,1,18.5,6,1.4,1.4,1.5,2.2.4,3.7-.7.9-1.5,1.7-2.3,2.5-2.5,2.2-3.4,2.2-6.2.2-2.8-1.9-5.9-2.8-9.1-3.3-2.3-.4-4.5.6-6.5,1.7-.4.2-.6.6-.9.9-.9,1.1-.8,2.5.5,3.3,1.4.9,2.9,1.7,4.5,2.4,2.5,1,5.1,1.8,7.6,2.9,1.9.8,3.9,1.8,5.6,3,3.6,2.4,5.3,5.8,4.8,10.2-.1,1-.4,2-.8,2.8-.8,1.6-1.8,3.2-2.8,4.8-.4.6-.8,1.2-1.4,1.5-2.5,1.3-5,2.9-7.6,3.7-2.7.8-5.6.8-8.6,1.2h-.2Z" fill="#ED217C"/>
                <path class="cls-1" d="M431.7,250.2h14.9c1,0,2,0,3,.2.8.1,1.2.8,1.1,1.6-.4,1.9-.9,3.9-1.3,5.8-.3,1.3-1.2,1.9-2.5,1.9h-9.4c-2.2,0-2.6.3-3.2,2.6-.4,1.4-.7,2.7-1.1,4.1-.6,2.5-1.3,4.9-1.9,7.4-.9,3.9-1.7,7.7-2.5,11.6-.6,2.6-1.2,5.2-1.8,7.9-.4,1.7-1.4,2.9-3.1,3-2.5.1-5.1,0-7.7,0s-1.8-1-1.6-2.1c.3-1.4.7-2.7,1.1-4.1.6-2,1.4-4,1.8-6.1,1.2-5.5,2.2-11.1,3.9-16.5.5-1.8.8-3.6,1.2-5.4.3-1.4-.4-2.2-1.8-2.3h-7.7c-1,0-2,0-3-.3-.4-.1-.9-.9-.9-1.2.5-2.1,1-4.1,1.8-6.1.2-.6,1.2-1.2,1.9-1.4,1.1-.3,2.2-.3,3.4-.3h15.4v-.3h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M389,296.4h-3c-2-.2-2.8-1.2-2.3-3.1,0-.1,0-.3.1-.4,2-5.3,2.8-11,3.9-16.5.3-1.7.8-3.3,1.3-4.9,1.3-3.8,2-7.7,2.8-11.5.5-2.2,1-4.4,1.5-6.6.4-1.8,1.6-2.7,3.3-2.8,2.1-.1,4.3,0,6.4,0s1.6.7,1.6,1.7,0,2.6-.2,3.8c-1,5-2.1,10-3.3,15-1.1,4.7-2.4,9.4-3.5,14-.6,2.6-1.1,5.3-1.8,7.9-.9,3.4-1.3,3.6-4.7,3.7h-2.1v-.3h0Z" fill="#ED217C"/>
                <path class="cls-1" d="M461.2,250.3c4.1,0,6.7,3,5.6,7-1,3.6-2.1,7.1-5.8,9-.9.5-1.4,1.4-2.2,2-1.4,1.1-3.3,1.1-4.8,0-1.5-1-1.5-2.4,0-3.4,1-.7,2.1-1.4,3.2-2.1,1-.7,1-1.3.1-2-.2-.2-.5-.3-.7-.5-2.2-1.8-3.1-4.2-2.1-6.7.8-2.2,2.8-3.1,5-3.4h1.7,0Z" fill="#ED217C"/>
            </svg>`

const GradientText = ({ text, style }) => {
  return (
    <Svg height="60" width="300">
      <Defs>
        <SvgLinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="1%" stopColor="#FFFFFF" stopOpacity="1" />
          <Stop offset="100%" stopColor="#46B1C9" stopOpacity="1" />
        </SvgLinearGradient>
      </Defs>
      <SvgText fill="url(#grad)" fontSize="30" fontWeight="bold" x="50%" y="50%" textAnchor="middle">
        {text}
      </SvgText>
    </Svg>
  );
};

export default function PaywallScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.paywall}>
            <SvgXml xml={xml} width="39" height="69" />
        </View>
        <View style={styles.svgBox}>
            <SvgXml xml={xml1} />
        </View>
        <View style={styles.textBox}>
            <Text style={styles.text}>Unlimited Rizz</Text>
            <Text style={styles.text}>Coach Recommended</Text>
            <Text style={styles.text}>Proven to Get Dates</Text>
            <Text style={styles.text}>x10 More Responses</Text>
            <Text style={styles.text}>x8 More Dates</Text>
        </View>
        <TouchableOpacity style={styles.paywallEnd} onPress={() => navigation.navigate('Home')}>
            <LinearGradient 
              colors={['#00A676', '#46B1C9']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.paywallEndTextBtn}
            >
              <Text style={styles.paywallEndTextBtnt}>Rizz God</Text>
            </LinearGradient>
            <GradientText text="Elevate Your Game" style={styles.paywallEndText} />
            <TouchableOpacity style={styles.paywallEndBtn} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.paywallEndBtnText}>Unlock Free Trial</Text>
            </TouchableOpacity>
      
            <Text style={styles.paywallEndLtext}>risk-free trial then $8.67/week</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#040404"
  },

  paywall: {
    width: "100%"
  },

  svgBox: {
    width: "100%",
    height: "250px",
    marginTop: -70,
    opacity: .7
  },

  textBox: {
    display: "flex",
    gap: 13,
    marginTop: -40
  },

  text: {
    color: "#fff",
    fontSize: 20,
  },

  paywallEnd: {
    width: "100%",
    borderWidth: "3dp",
    borderRadius: 20,
    borderColor: "#00A676",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#363636",
    marginTop: 40,
    position: "relative"
  },

  paywallEndTextBtn: {
    position: "absolute",
    top: -15,
    width: 100,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#00A676",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paywallEndTextBtnt: {
    color: "#fff",
    fontWeight: "800",
  },

  paywallEndText: {
    fontSize: "30px",
    color: "#46B1C9",
    fontWeight: "900"
  },

  paywallEndBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00A676",
    borderRadius: 50,
    padding: 15,
    marginTop: -10,
    marginBottom: 10,
  },

  paywallEndBtnText: {
    color: "#fff",
    fontSize: 23,
    fontWeight:"600",
  },

  paywallEndLtext: {
    color: "#fff",
    fontWeight: "100",
    fontSize: 17
  }
});
