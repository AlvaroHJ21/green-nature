import { useEffect, useRef } from 'react';
import NavItem from './item';
import { navItems } from '../../../data/navItems';

interface Props {
  currentPage?: string;
}

export default function Navbar(props: Props) {
  const { currentPage } = props;

  const gimmickRef = useRef<HTMLDivElement>(null);
  const activeLiRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (currentPage) {
      const currentItem = document.getElementById(currentPage) as HTMLLIElement;

      if (currentItem) {
        activeLiRef.current = currentItem;
      }
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      if (activeLiRef.current) {
        moveToAnchor(activeLiRef.current);

        if (gimmickRef.current) {
          gimmickRef.current.style.transitionDuration = '0s';
        }
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function moveToAnchor(li: HTMLLIElement) {
    if (gimmickRef.current) {
      const anchor = li.querySelector('a');

      if (!anchor) {
        return;
      }

      const width = anchor.offsetWidth;
      const x = anchor.offsetLeft;
      gimmickRef.current.style.transitionDuration = '.3s';
      gimmickRef.current.style.display = 'block';
      gimmickRef.current.style.width = `${width}px`;
      gimmickRef.current.style.left = `${x}px`;
    }
  }

  function handleLeave() {
    if (activeLiRef.current) {
      moveToAnchor(activeLiRef.current);
    }
  }

  return (
    <>
      <ul className="flex">
        {navItems.map((item) => {
          return (
            <NavItem
              key={item.name}
              item={item}
              onHover={moveToAnchor}
              onLeave={handleLeave}
              active={currentPage == item.name}
            />
          );
        })}
      </ul>

      <div
        ref={gimmickRef}
        className="bg-xgreen-100 absolute left-0 w-20 h-[3px] bottom-0 transition-all hidden pointer-events-none"
      ></div>
    </>
  );
}
