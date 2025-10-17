// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './HistoryItem.css';
import { classname_for_jumped_from_history } from '../Works/Works.css';
import React from 'react';
import { motion } from 'framer-motion';
import { cs, Markdown } from '@watasuke.net/common';
import { floatup_with_scroll } from '@pages/portfolio/components/FloatUpWithScroll/FloatUpWithScroll';
import { Event } from '@data/event_list';
import IconDoubleDown from '@assets/icons/general/double-down.svg';
import IconMoreHorizon from '@assets/icons/general/more-horizon.svg';

interface Props {
  event: Event;
  open_sidepeak: (content: React.ReactNode) => void;
}

export function HistoryItem(props: Props) {
  const on_click = () => {
    if (props.event.category === 'Work') {
      const elements = document.getElementsByClassName(props.event.key);
      if (!elements) {
        return;
      }
      const target = elements[0] as HTMLElement;
      window.scroll({
        top: window.pageYOffset + target.getBoundingClientRect().top - 20,
        behavior: 'smooth',
      });
      setTimeout(() => {
        // Blink the target element after scrolling
        // I don't know how to distinguish whether the element is focused via `target.focus()` or by Tab key,
        // so I add className, not using `:focus` pseudo-class
        target.classList.add(classname_for_jumped_from_history);
        setTimeout(
          () => target.classList.remove(classname_for_jumped_from_history),
          1000,
        );
      }, 700);
    } else if (props.event.body) {
      props.open_sidepeak(
        <Markdown
          embed_card={() => <></>}
          inner_embed_card={() => <></>}
          md={props.event.body}
        />,
      );
    }
  };
  const period = React.useMemo(() => {
    const period = props.event.period;
    if (!period) {
      return <div className={css.empty_period} />;
    }
    switch (period.kind) {
      case 'day':
        return (
          <div className={css.period}>
            <span>
              {period.date.month}/{period.date.day}
            </span>
          </div>
        );
      case 'period':
        return (
          <div className={css.period}>
            <span>
              {period.begin.month}/{period.begin.day}
            </span>
            <span className={css.range_separator} />
            <span>
              {period.end.month}/{period.end.day}
            </span>
          </div>
        );
      case 'doing':
        return (
          <div className={css.period}>
            <span>
              {period.begin.month}/{period.begin.day}
            </span>
            <span className={css.range_separator} />
            <span style={{ height: 4 }} />
          </div>
        );
    }
  }, [props.event]);
  const icon = React.useMemo(() => {
    if (props.event.category === 'Work') {
      return (
        <div style={{ transform: 'rotate(180deg)' }}>
          <IconDoubleDown />
        </div>
      );
    } else if (props.event.body !== '') {
      return <IconMoreHorizon />;
    }
    return <></>;
  }, [props.event]);
  const info_classname: Record<Event['category'], string> = {
    Work: css.info_green,
    Event: css.info_blue,
    General: css.info_cyan,
    Talk: css.info_yellow,
  };

  return (
    <motion.div {...floatup_with_scroll} className={css.container}>
      <div className={css.line_vertical} />
      <div className={css.line_vertical} />
      <div className={css.line_horizontal} />
      {period}
      <button
        disabled={props.event.category !== 'Work' && !props.event.body}
        className={cs(css.info_area, info_classname[props.event.category])}
        onClick={on_click}
      >
        <div className={css.info_row}>
          <h4 className={css.info_title}>{props.event.title}</h4>
          <div>
            <span className={css.info_tag}>{props.event.category}</span>
          </div>
        </div>
        <div className={css.info_row}>
          <span className={css.info_subtitle}>{props.event.subtitle}</span>
          <div className={css.info_icon}>
            {icon}
          </div>
        </div>
      </button>
    </motion.div>
  );
}
