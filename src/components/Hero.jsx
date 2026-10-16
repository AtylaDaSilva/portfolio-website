import './Hero.css'
import InfiniteMarquee from './common/InfiniteMarquee/InfiniteMarquee'
import DownloadCVButton from './common/DownloadCVButton/DownloadCVButton'
import { useTranslation, Trans } from 'react-i18next'

/* SVG icons as inline components for zero external deps */
const icons = [
  {
    name: 'Notion',
    color: '#fff',
    bg: '#ff020200',
    svg: (
      <svg width="64px" height="64px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#060" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#D52B1E" d="M32 5H15v26h17a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path><path fill="#FFCC4D" d="M15 10a8 8 0 0 0-8 8a8 8 0 1 0 16 0a8 8 0 0 0-8-8zm-6.113 4.594l1.602 1.602l-2.46 1.23a6.95 6.95 0 0 1 .858-2.832zm-.858 3.979l4.4 2.207l-2.706 1.804l.014.021a6.963 6.963 0 0 1-1.708-4.032zM14 24.92a6.945 6.945 0 0 1-2.592-.92H14v.92zM14 23h-3.099L14 20.934V23zm0-3.268l-.607.405L9.118 18l2.116-1.058L14 19.707v.025zm0-1.439l-3.543-3.543l3.543.59v2.953zm0-3.992l-4.432-.713A6.983 6.983 0 0 1 14 11.08v3.221zm7.113.293a6.95 6.95 0 0 1 .858 2.833l-2.46-1.23l1.602-1.603zM16 11.08a6.987 6.987 0 0 1 4.432 2.508L16 14.301V11.08zm0 4.26l3.543-.591L16 18.293V15.34zm0 4.367l2.765-2.765L20.882 18l-4.274 2.137l-.608-.405v-.025zm0 5.213V24h2.592a6.945 6.945 0 0 1-2.592.92zM16 23v-2.066L19.099 23H16zm4.264-.395l.014-.021l-2.706-1.804l4.4-2.207a6.976 6.976 0 0 1-1.708 4.032z"></path><path fill="#D52B1E" d="M11 13v7a4 4 0 0 0 8 0v-7h-8z"></path><path fill="#FFF" d="M12 14v6a3 3 0 0 0 6 0v-6h-6z"></path><path fill="#829ACD" d="M13 17h4v2h-4z"></path><path fill="#829ACD" d="M14 16h2v4h-2z"></path><path fill="#039" d="M12 17h1v2h-1zm2 0h2v2h-2zm3 0h1v2h-1zm-3 3h2v2h-2zm0-6h2v2h-2z"></path></g></svg>
    ),
    delay: '0s', duration: '6s', style: 'float-0',
  },
  {
    name: 'Slack',
    color: '#E01E5A',
    bg: '#ff020200',
    svg: (
      <svg width="64px" height="64px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#CE2028" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36v4z"></path><path fill="#22408C" d="M0 13h36v10H0z"></path><path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path></svg>
    ),
    delay: '1s', duration: '7s', style: 'float-1',
  },
  {
    name: 'Germany',
    color: '#FF4A00',
    bg: '#ff020200',
    svg: (
      <svg width="64px" height="64px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FFCD05" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"></path><path fill="#ED1F24" d="M0 14h36v9H0z"></path><path fill="#141414" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4z"></path></g></svg>
    ),
    delay: '2s', duration: '5.5s', style: 'float-2',
  },
  {
    name: 'Japan',
    color: '#7C3AED',
    bg: '#ff020200',
    svg: (
      <svg width="64px" height="64px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#EEE" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><circle fill="#ED1B2F" cx="18" cy="18" r="7"></circle></svg>
    ),
    delay: '0.5s', duration: '8s', style: 'float-3',
  },
  {
    name: 'England',
    color: '#0F9D58',
    bg: '#ff020200',
    svg: (
      <svg width="64px" height="64px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"></path><path fill="#CF1B2B" d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"></path><path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"></path><path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path></g></svg>
    ),
    delay: '1.5s', duration: '6.5s', style: 'float-4',
  },
  {
    name: 'USA',
    color: '#9D5CF6',
    bg: '#ff020200',
    svg: (
      <svg width="64px" height="64px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_1310_7981)"> <path d="M27.9998 0H-0.000244141V20H27.9998V0Z" fill="url(#paint0_linear_1310_7981)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000244141 0H27.9998V1.33333H-0.000244141V0ZM-0.000244141 2.66667H27.9998V4H-0.000244141V2.66667ZM-0.000244141 5.33333H27.9998V6.66667H-0.000244141V5.33333ZM-0.000244141 8H27.9998V9.33333H-0.000244141V8ZM-0.000244141 10.6667H27.9998V12H-0.000244141V10.6667ZM-0.000244141 13.3333H27.9998V14.6667H-0.000244141V13.3333ZM-0.000244141 16H27.9998V17.3333H-0.000244141V16ZM-0.000244141 18.6667H27.9998V20H-0.000244141V18.6667Z" fill="url(#paint1_linear_1310_7981)"></path> <path d="M11.9998 0H-0.000244141V9.33333H11.9998V0Z" fill="url(#paint2_linear_1310_7981)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99992 2.66666C1.63173 2.66666 1.33325 2.36818 1.33325 1.99999C1.33325 1.63181 1.63173 1.33333 1.99992 1.33333C2.36811 1.33333 2.66659 1.63181 2.66659 1.99999C2.66659 2.36818 2.36811 2.66666 1.99992 2.66666ZM4.66659 2.66666C4.2984 2.66666 3.99992 2.36818 3.99992 1.99999C3.99992 1.63181 4.2984 1.33333 4.66659 1.33333C5.03477 1.33333 5.33325 1.63181 5.33325 1.99999C5.33325 2.36818 5.03477 2.66666 4.66659 2.66666ZM7.33325 2.66666C6.96506 2.66666 6.66658 2.36818 6.66658 1.99999C6.66658 1.63181 6.96506 1.33333 7.33325 1.33333C7.70144 1.33333 7.99992 1.63181 7.99992 1.99999C7.99992 2.36818 7.70144 2.66666 7.33325 2.66666ZM9.99992 2.66666C9.63173 2.66666 9.33325 2.36818 9.33325 1.99999C9.33325 1.63181 9.63173 1.33333 9.99992 1.33333C10.3681 1.33333 10.6666 1.63181 10.6666 1.99999C10.6666 2.36818 10.3681 2.66666 9.99992 2.66666ZM3.33325 3.99999C2.96506 3.99999 2.66659 3.70152 2.66659 3.33333C2.66659 2.96514 2.96506 2.66666 3.33325 2.66666C3.70144 2.66666 3.99992 2.96514 3.99992 3.33333C3.99992 3.70152 3.70144 3.99999 3.33325 3.99999ZM5.99992 3.99999C5.63173 3.99999 5.33325 3.70152 5.33325 3.33333C5.33325 2.96514 5.63173 2.66666 5.99992 2.66666C6.36811 2.66666 6.66658 2.96514 6.66658 3.33333C6.66658 3.70152 6.36811 3.99999 5.99992 3.99999ZM8.66658 3.99999C8.2984 3.99999 7.99992 3.70152 7.99992 3.33333C7.99992 2.96514 8.2984 2.66666 8.66658 2.66666C9.03477 2.66666 9.33325 2.96514 9.33325 3.33333C9.33325 3.70152 9.03477 3.99999 8.66658 3.99999ZM9.99992 5.33333C9.63173 5.33333 9.33325 5.03485 9.33325 4.66666C9.33325 4.29847 9.63173 3.99999 9.99992 3.99999C10.3681 3.99999 10.6666 4.29847 10.6666 4.66666C10.6666 5.03485 10.3681 5.33333 9.99992 5.33333ZM7.33325 5.33333C6.96506 5.33333 6.66658 5.03485 6.66658 4.66666C6.66658 4.29847 6.96506 3.99999 7.33325 3.99999C7.70144 3.99999 7.99992 4.29847 7.99992 4.66666C7.99992 5.03485 7.70144 5.33333 7.33325 5.33333ZM4.66659 5.33333C4.2984 5.33333 3.99992 5.03485 3.99992 4.66666C3.99992 4.29847 4.2984 3.99999 4.66659 3.99999C5.03477 3.99999 5.33325 4.29847 5.33325 4.66666C5.33325 5.03485 5.03477 5.33333 4.66659 5.33333ZM1.99992 5.33333C1.63173 5.33333 1.33325 5.03485 1.33325 4.66666C1.33325 4.29847 1.63173 3.99999 1.99992 3.99999C2.36811 3.99999 2.66659 4.29847 2.66659 4.66666C2.66659 5.03485 2.36811 5.33333 1.99992 5.33333ZM3.33325 6.66666C2.96506 6.66666 2.66659 6.36818 2.66659 5.99999C2.66659 5.6318 2.96506 5.33333 3.33325 5.33333C3.70144 5.33333 3.99992 5.6318 3.99992 5.99999C3.99992 6.36818 3.70144 6.66666 3.33325 6.66666ZM5.99992 6.66666C5.63173 6.66666 5.33325 6.36818 5.33325 5.99999C5.33325 5.6318 5.63173 5.33333 5.99992 5.33333C6.36811 5.33333 6.66658 5.6318 6.66658 5.99999C6.66658 6.36818 6.36811 6.66666 5.99992 6.66666ZM8.66658 6.66666C8.2984 6.66666 7.99992 6.36818 7.99992 5.99999C7.99992 5.6318 8.2984 5.33333 8.66658 5.33333C9.03477 5.33333 9.33325 5.6318 9.33325 5.99999C9.33325 6.36818 9.03477 6.66666 8.66658 6.66666ZM9.99992 7.99999C9.63173 7.99999 9.33325 7.70152 9.33325 7.33333C9.33325 6.96514 9.63173 6.66666 9.99992 6.66666C10.3681 6.66666 10.6666 6.96514 10.6666 7.33333C10.6666 7.70152 10.3681 7.99999 9.99992 7.99999ZM7.33325 7.99999C6.96506 7.99999 6.66658 7.70152 6.66658 7.33333C6.66658 6.96514 6.96506 6.66666 7.33325 6.66666C7.70144 6.66666 7.99992 6.96514 7.99992 7.33333C7.99992 7.70152 7.70144 7.99999 7.33325 7.99999ZM4.66659 7.99999C4.2984 7.99999 3.99992 7.70152 3.99992 7.33333C3.99992 6.96514 4.2984 6.66666 4.66659 6.66666C5.03477 6.66666 5.33325 6.96514 5.33325 7.33333C5.33325 7.70152 5.03477 7.99999 4.66659 7.99999ZM1.99992 7.99999C1.63173 7.99999 1.33325 7.70152 1.33325 7.33333C1.33325 6.96514 1.63173 6.66666 1.99992 6.66666C2.36811 6.66666 2.66659 6.96514 2.66659 7.33333C2.66659 7.70152 2.36811 7.99999 1.99992 7.99999Z" fill="url(#paint3_linear_1310_7981)"></path> </g> <defs> <linearGradient id="paint0_linear_1310_7981" x1="13.9998" y1="0" x2="13.9998" y2="20" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="#F0F0F0"></stop> </linearGradient> <linearGradient id="paint1_linear_1310_7981" x1="13.9998" y1="0" x2="13.9998" y2="20" gradientUnits="userSpaceOnUse"> <stop stop-color="#D02F44"></stop> <stop offset="1" stop-color="#B12537"></stop> </linearGradient> <linearGradient id="paint2_linear_1310_7981" x1="5.99976" y1="0" x2="5.99976" y2="9.33333" gradientUnits="userSpaceOnUse"> <stop stop-color="#46467F"></stop> <stop offset="1" stop-color="#3C3C6D"></stop> </linearGradient> <linearGradient id="paint3_linear_1310_7981" x1="5.99992" y1="1.33333" x2="5.99992" y2="7.99999" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="#F0F0F0"></stop> </linearGradient> <clipPath id="clip0_1310_7981"> <rect width="28" height="20" rx="2" fill="white"></rect> </clipPath> </defs> </g></svg>
    ),
    delay: '2.5s', duration: '7.5s', style: 'float-5',
  },
  {
    name: 'Australia',
    color: '#06B6D4',
    bg: '#ff020200',
    svg: (
      <svg width="64px" height="64px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#00247D" d="M32 5H4c-.205 0-.407.015-.604.045l-.004 1.754l-2.73-.004A3.984 3.984 0 0 0 0 9v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path><path d="M9 26.023l-1.222 1.129l.121-1.66l-1.645-.251l1.373-.94l-.829-1.443l1.591.488L9 21.797l.612 1.549l1.591-.488l-.83 1.443l1.374.94l-1.645.251l.121 1.66zM27.95 9.562l-.799.738l.079-1.086l-1.077-.164l.899-.615l-.542-.944l1.04.319l.4-1.013l.401 1.013l1.041-.319l-.543.944l.898.615l-1.076.164l.079 1.086zm-4 6l-.799.739l.079-1.086l-1.077-.164l.899-.616l-.542-.944l1.04.319l.4-1.013l.401 1.013l1.041-.319l-.543.944l.898.616l-1.076.164l.079 1.086zm9-2l-.799.739l.079-1.086l-1.077-.164l.899-.616l-.542-.944l1.04.319l.4-1.013l.401 1.013l1.041-.319l-.543.944l.898.616l-1.076.164l.079 1.086zm-5 14l-.799.739l.079-1.086l-1.077-.164l.899-.616l-.542-.944l1.04.319l.4-1.013l.401 1.013l1.041-.319l-.543.944l.898.616l-1.076.164l.079 1.086zM31 16l.294.596l.657.095l-.475.463l.112.655L31 17.5l-.588.309l.112-.655l-.475-.463l.657-.095z" fill="#FFF"></path><path fill="#00247D" d="M19 18V5H4c-.32 0-.604.045-.604.045l-.004 1.754l-2.73-.004S.62 6.854.535 7A3.988 3.988 0 0 0 0 9v9h19z"></path><path fill="#EEE" d="M19 5h-2.331L12 8.269V5H7v2.569L3.396 5.045a3.942 3.942 0 0 0-1.672.665L6.426 9H4.69L.967 6.391a4.15 4.15 0 0 0-.305.404L3.813 9H0v5h3.885L0 16.766V18h3.332L7 15.432V18h5v-3.269L16.668 18H19v-2.029L16.185 14H19V9h-2.814L19 7.029V5z"></path><path fill="#CF1B2B" d="M11 5H8v5H0v3h8v5h3v-5h8v-3h-8z"></path><path fill="#CF1B2B" d="M19 5h-1.461L12 8.879V9h1.571L19 5.198zm-17.276.71a4.052 4.052 0 0 0-.757.681L4.69 9h1.735L1.724 5.71zM6.437 14L.734 18h1.727L7 14.822V14zM19 17.802v-1.22L15.313 14H13.57z"></path></g></svg>
    ),
    delay: '3s', duration: '5s', style: 'float-6',
  },
]

/* Icon positions around the central cube */
const positions = [
  { top: '8%',  right: '15%' },
  { top: '5%',  right: '38%' },
  { top: '38%', right: '5%'  },
  { top: '60%', right: '40%' },
  { top: '65%', right: '12%' },
  { top: '15%', right: '60%' },
  { top: '50%', right: '65%' },
]

const tools = ['n8n', 'Make', 'Zapier', 'Airtable', 'Google Workspace', 'Gemini', 'Claude', 'OpenAI', 'Groq', 'Python', 'PHP', 'Node.js', 'API', 'Webhooks', 'React', 'Next.js', 'Tailwind', 'Figma', 'Notion', 'Trello', 'ClickUp', 'Git', 'VS Code', 'Linux', 'Docker', 'AWS',]

function FloatingIcon({ icon, pos, idx }) {
  return (
    <div
      className="floating-icon"
      style={{
        top: pos.top,
        right: pos.right,
        animationName: icon.style,
        animationDuration: icon.duration,
        animationDelay: icon.delay,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        background: icon.bg,
      }}
      title={icon.name}
    >
      <span style={{ color: icon.color }}>{icon.svg}</span>
    </div>
  )
}

export default function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="hero">
      {/* Background radial glows */}
      <div className="hero__bg-glow hero__bg-glow--violet" />
      <div className="hero__bg-glow hero__bg-glow--cyan" />

      <div className="container hero__inner">
        {/* ── LEFT: Text ── */}
        <div className="hero__content">
          <span className="section-eyebrow">{t("hero.eyebrow")}</span>

          <h1 className="hero__headline">
            <Trans
              i18nKey="hero.header"
              components={{ highlight: <span className="gradient-text" /> }}
            />
          </h1>

          <p className="hero__sub">
            {t("hero.subtext")}
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">My Work</a>
            <DownloadCVButton />
          </div>
        </div>

        {/* ── RIGHT: Visual ── */}
        <div className="hero__visual">
          {/* Orbital ring */}
          <div className="orbital-ring" />
          <div className="orbital-ring orbital-ring--2" />

          {/* Central cube */}
          <div className="cube-wrap">
            <div className="cube">
              {/* <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                <path d="M40 8L72 26V58L40 76L8 58V26L40 8Z" fill="url(#cubeGrad)" stroke="rgba(124,58,237,0.5)" strokeWidth="1"/>
                <path d="M40 8V76M8 26L72 26M8 58L72 58" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
                <path d="M40 8L72 26L40 44L8 26L40 8Z" fill="url(#cubeTop)"/>
                <defs>
                  <linearGradient id="cubeGrad" x1="8" y1="8" x2="72" y2="76" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#9D5CF6"/>
                    <stop offset="100%" stopColor="#06B6D4"/>
                  </linearGradient>
                  <linearGradient id="cubeTop" x1="8" y1="8" x2="72" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.18)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0.02)"/>
                  </linearGradient>
                </defs>
              </svg> */}
              <svg width="100px" height="100px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#009B3A" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#FEDF01" d="M32.728 18L18 29.124L3.272 18L18 6.875z"></path><circle fill="#002776" cx="17.976" cy="17.924" r="6.458"></circle><path fill="#CBE9D4" d="M12.277 14.887a6.406 6.406 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614z"></path><path fill="#88C9F9" d="M12 18.233h1v1h-1zm1 2h1v1h-1z"></path><path fill="#55ACEE" d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"></path><path fill="#3B88C3" d="M19 20.233h1v1h-1z"></path></g></svg>
            </div>
          </div>

          {/* Floating tool icons */}
          {icons.map((icon, i) => (
            <FloatingIcon key={icon.name} icon={icon} pos={positions[i]} idx={i} />
          ))}
        </div>
      </div>

      {/* ── Trusted By strip ── */}
      {/* Infinite marquee still references programing tools/languages */}
      {/* <div className="tools-strip">
        <div className="container">
          <span className="tools-strip__label">Eu trabalho com</span>
          <InfiniteMarquee
            duration={120} 
            pauseOnHover
            gap="16px"
            fadeWidth={100}
          >
            {tools.map((t) => (
              <span key={t} className="tools-strip__logo">{t}</span>
            ))}
          </InfiniteMarquee>
        </div>
      </div> */}
    </section>
  )
}
