import { CgWebsite } from 'react-icons/cg';
import { GrOptimize } from 'react-icons/gr';
import { MdIntegrationInstructions } from 'react-icons/md';
import { SiTestinglibrary, SiWebcomponentsdotorg } from 'react-icons/si';
import { FcSupport } from 'react-icons/fc';

import { IServicesTypes } from '@/types';

const SERVICES_CARD: IServicesTypes[] = [
  {
    id: 1,
    title: 'Разработка веб-сайтов и веб-приложений с использованием React и Next.js',
    ICON: CgWebsite
  },
  {
    id: 6,
    title: 'Создание пользовательских интерфейсов (UI) и компонентов для веб-приложений',
    ICON: SiWebcomponentsdotorg
  },
  { id: 2, title: 'Оптимизация производительности веб-приложений и сайтов', ICON: GrOptimize },
  { id: 3, title: 'Интеграция с API и бэкэнд-сервисами', ICON: MdIntegrationInstructions },
  { id: 4, title: 'Тестирование и отладка кода', ICON: SiTestinglibrary },
  { id: 5, title: 'Техническая поддержка и сопровождение проектов', ICON: FcSupport }
];

export default SERVICES_CARD;
