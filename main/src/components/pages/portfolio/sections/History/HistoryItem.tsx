// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './HistoryItem.css';
import {Markdown} from '@watasuke.net/common';
import {Event} from '@data/event_list';
import IconDoubleDown from '@assets/icons/general/double-down.svg';
import IconMoreHorizon from '@assets/icons/general/more-horizon.svg';

interface Props {
  event: Event;
  open_sidepeak: (content: React.ReactNode) => void;
}

export function HistoryItem(props: Props) {
  const on_click = () => {
    if (props.event.category === 'Work') {
      window.scroll({
        top:
          window.pageYOffset +
          document
            .getElementsByClassName(props.event.key)[0]
            ?.getBoundingClientRect().top -
          20,
        behavior: 'smooth',
      });
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
  const Period = () => {
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
            <span style={{height: 4}} />
          </div>
        );
    }
  };
  const Icon = () => {
    if (props.event.category === 'Work') {
      return (
        <div style={{transform: 'rotate(180deg)'}}>
          <IconDoubleDown />
        </div>
      );
    } else if (props.event.body !== '') {
      return <IconMoreHorizon />;
    }
    return <></>;
  };

  return (
    <div className={css.container}>
      <div className={css.line_vertical} />
      <div className={css.line_vertical} />
      <div className={css.line_horizontal} />
      <Period />
      <button
        disabled={props.event.category !== 'Work' && !props.event.body}
        className={css.info_area}
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
            <Icon />
          </div>
        </div>
      </button>
    </div>
  );
}
