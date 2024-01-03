import React, { useEffect, useRef } from 'react';
import type { INavItem } from '../../data/navItems';

interface Props {
  item: INavItem;

  onHover(li: HTMLLIElement): void;
  onLeave?(): void;
  active?: boolean;
}

export default function Item(props: Props) {
  const { onHover, onLeave, active = false, item } = props;
  const { href, name, icon, items } = item;

  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (active && liRef.current) {
      onHover(liRef.current);
    }
  }, [active]);

  function handleHover(e: React.MouseEvent) {
    if (e.currentTarget instanceof HTMLLIElement) {
      onHover(e.currentTarget);
    }
  }

  function handleLeave() {
    if (onLeave) {
      onLeave();
    }
  }

  return (
    <li
      ref={liRef}
      className="px-4 group/item"
      id={name}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      <a
        href={href}
        className={`py-9 inline-block uppercase font-bold hover:text-xgreen-100 text-[13px] ${
          active ? 'text-xgreen-100' : ''
        }`}
      >
        <span className="text-white mr-[10px] text-[10px]">{icon}</span>
        {name}
      </a>

      {items && (
        <ul className="bg-xgreen-900 position absolute top-auto min-w-40 hidden group-hover/item:block">
          {items.map((subitem) => {
            return (
              <li
                key={subitem.name}
                className="p-3 border-b border-xgreen-800 group/subitem flex items-center relative"
              >
                <a href={subitem.href} className="text-xs block flex-1">
                  {subitem.name}
                </a>

                {subitem.items && <i className="fas fa-chevron-right text-[8px]"></i>}

                {subitem.items && (
                  <ul className="group-hover/subitem:block absolute hidden left-[101%] top-0 bg-xgreen-900 min-w-40">
                    {subitem.items.map((subsubitem) => {
                      return (
                        <li key={subsubitem.name} className="p-3 border-b border-xgreen-800">
                          <a href={subsubitem.href} className="text-xs block">
                            {subsubitem.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
