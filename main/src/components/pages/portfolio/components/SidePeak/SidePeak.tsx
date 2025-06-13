// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './SidePeak.css';
import React from 'react';
import {motion} from 'framer-motion';
import {easing} from '@watasuke.net/common';
import IconDoubleDown from '@assets/icons/general/double-down.svg';

interface SidepeakState {
  open: boolean;
  content: React.ReactNode;
  content_key: string;
}

interface SidepeakContextType {
  sidepeak_state: SidepeakState;
  open_sidepeak: (content: React.ReactNode) => void;
  close_sidepeak: () => void;
}

const SidepeakContext = React.createContext<SidepeakContextType | null>(null);

export function SidepeakProvider({children}: {children: React.ReactNode}) {
  const [sidepeak_state, set_sidepeak_state] = React.useState<SidepeakState>({
    open: false,
    content: null,
    content_key: '',
  });

  const open_sidepeak = React.useCallback((content: React.ReactNode) => {
    set_sidepeak_state({
      open: true,
      content,
      content_key: Date.now().toString() + Math.random().toString(36),
    });
  }, []);

  const close_sidepeak = React.useCallback(() => {
    set_sidepeak_state(s => ({...s, open: false}));
  }, []);

  const value = React.useMemo(() => {
    return {
      sidepeak_state,
      open_sidepeak,
      close_sidepeak,
    };
  }, [sidepeak_state, open_sidepeak, close_sidepeak]);

  return (
    <SidepeakContext.Provider value={value}>
      {children}
    </SidepeakContext.Provider>
  );
}

export function useSidepeak() {
  const context = React.useContext(SidepeakContext);
  if (!context) {
    throw new Error('useSidepeak() must be used within a SidepeakProvider');
  }
  return context;
}

export function SidepeakComponent() {
  const id = 'portfolio-sidepeak';

  const {sidepeak_state, close_sidepeak} = useSidepeak();
  React.useEffect(() => {
    const on_click = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        sidepeak_state.open &&
        !target.closest(`#${id}`) &&
        !target.closest(`.${css.sidepeak_close_icon}`)
      ) {
        close_sidepeak();
      }
    };
    document.addEventListener('click', on_click);
    return () => document.removeEventListener('click', on_click);
  }, [sidepeak_state, close_sidepeak, id]);

  return (
    <motion.div
      id={id}
      variants={{
        opened: {
          transform: 'translateX(0)',
          boxShadow: `-4px 0 28px #000000e9`,
        },
        closed: {
          transform: 'translateX(100%)',
          boxShadow: 'none',
        },
      }}
      animate={sidepeak_state.open ? 'opened' : 'closed'}
      transition={{
        ease: easing.out_expo.array,
        duration: 0.3,
      }}
      className={css.sidepeak}
      // TODO: drag left-to-right to close
    >
      <div className={css.sidepeak_top}>
        <button className={css.sidepeak_close_icon} onClick={close_sidepeak}>
          <IconDoubleDown />
        </button>
      </div>
      {sidepeak_state.content && (
        <motion.div
          key={sidepeak_state.content_key}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.2}}
        >
          {sidepeak_state.content}
        </motion.div>
      )}
    </motion.div>
  );
}
