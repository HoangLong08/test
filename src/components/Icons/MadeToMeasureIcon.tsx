import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const MadeToMeasureSvg = () => (
  <svg fill="none" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.62552 15.96C2.95978 16.2581 2.39288 16.7324 1.98908 17.329C1.76604 17.6588 1.64214 18.0431 1.63146 18.4381C1.63049 18.6689 1.68309 18.8969 1.7853 19.105C2.29673 20.1446 3.90631 20.3923 5.44958 19.6686C6.1153 19.3706 6.6822 18.8964 7.08602 18.2998C7.27379 18.046 7.39121 17.7491 7.42691 17.438C7.4626 17.1268 7.41536 16.8119 7.28976 16.5238C6.77837 15.484 5.16883 15.2364 3.62552 15.96ZM6.47614 16.9053C6.51915 16.9943 6.54096 17.0916 6.53992 17.1899C6.52627 17.4199 6.45021 17.6422 6.31953 17.834C6.00492 18.287 5.56876 18.6468 5.05877 18.874C3.91643 19.4097 2.84549 19.2244 2.59896 18.7232C2.5469 18.5674 2.53395 18.4018 2.56121 18.2401C2.58846 18.0785 2.65512 17.9256 2.75557 17.7944C3.0702 17.3414 3.50635 16.9816 4.01633 16.7544C5.15867 16.2188 6.22961 16.404 6.47614 16.9053Z"
      fill="black"
      fillOpacity="0.85"
    />
    <path
      d="M14.2596 27.0899C15.5763 24.9051 15.2839 22.33 13.6184 21.2601L14.4793 19.8315L19.1884 24.8749L21.1844 27.0124L23.9739 30L30 24.6351L21.1253 15.1305C29.4505 10.8133 29.3248 6.99328 29.3173 6.82546C29.3129 6.75323 29.2904 6.68316 29.2518 6.62143C29.2131 6.5597 29.1595 6.50821 29.0957 6.4715C29.0318 6.43479 28.9597 6.41399 28.8857 6.41094C28.8117 6.40789 28.738 6.42268 28.6712 6.454L20.1252 10.4614L24.7278 2.82206C24.7654 2.75968 24.7866 2.68925 24.7897 2.61696C24.7928 2.54468 24.7776 2.47277 24.7454 2.40757C24.7133 2.34237 24.6653 2.28589 24.6055 2.24311C24.5458 2.20034 24.4762 2.17257 24.4028 2.16227C24.2367 2.13897 20.4655 1.71451 15.4766 9.08086L6.99759 0L0.971616 5.36479L7.21273 12.0489L7.21297 12.0492L7.21328 12.0494L9.20873 14.1865L9.20894 14.1869L9.20921 14.1871L10.1136 15.1558L8.92141 15.7149C7.97801 14.0051 5.37085 13.5002 3.02666 14.5993C1.15823 15.4754 -0.000137067 17.1157 3.55967e-05 18.6509C-0.00222734 19.0861 0.0963595 19.5162 0.288418 19.909C1.17557 21.7128 3.84751 22.2659 6.24443 21.142C7.34437 20.6489 8.25063 19.8204 8.82693 18.7811L12.4929 17.0619C12.5536 17.2764 12.5938 17.4355 12.618 17.546L10.4793 21.0937C9.37026 21.5672 8.4489 22.3799 7.854 23.4092C7.32616 24.2661 7.04119 25.2447 7.02829 26.2446C7.02829 27.5529 7.57353 28.7124 8.61083 29.3097C10.3776 30.3217 12.9116 29.3259 14.2596 27.0899ZM28.7247 24.5778L24.0327 28.7548L22.1556 26.7446L24.5017 24.6559C24.546 24.6171 24.5821 24.57 24.6077 24.5175C24.6333 24.465 24.648 24.408 24.651 24.3499C24.654 24.2918 24.6452 24.2337 24.625 24.179C24.6049 24.1242 24.5739 24.0739 24.5337 24.0309C24.4936 23.9879 24.4451 23.9531 24.3911 23.9285C24.3372 23.9039 24.2787 23.89 24.2192 23.8875C24.1597 23.8851 24.1002 23.8942 24.0443 23.9143C23.9884 23.9343 23.9371 23.965 23.8934 24.0046L21.5473 26.0932L20.1596 24.6067L21.7615 23.1808C21.8063 23.1421 21.8428 23.095 21.8689 23.0424C21.895 22.9898 21.91 22.9326 21.9132 22.8742C21.9164 22.8158 21.9077 22.7574 21.8876 22.7024C21.8675 22.6473 21.8363 22.5967 21.796 22.5535C21.7556 22.5103 21.7069 22.4754 21.6526 22.4508C21.5983 22.4262 21.5395 22.4124 21.4797 22.4101C21.4199 22.4079 21.3602 22.4173 21.3041 22.4379C21.2481 22.4584 21.1967 22.4896 21.1531 22.5296L19.5514 23.9554L18.1637 22.4692L19.7655 21.0432C19.8093 21.0042 19.8448 20.9571 19.87 20.9047C19.8951 20.8523 19.9095 20.7956 19.9122 20.7378C19.915 20.68 19.906 20.6222 19.8859 20.5677C19.8657 20.5133 19.8348 20.4633 19.7949 20.4205C19.7549 20.3777 19.7067 20.3431 19.6531 20.3185C19.5994 20.2939 19.5413 20.2799 19.4821 20.2772C19.4229 20.2745 19.3637 20.2833 19.308 20.3029C19.2522 20.3226 19.201 20.3528 19.1572 20.3918L17.5554 21.8178L16.1676 20.3315L18.5137 18.2429C18.601 18.1638 18.6528 18.0543 18.6577 17.9381C18.6627 17.822 18.6205 17.7086 18.5403 17.6227C18.46 17.5368 18.3483 17.4853 18.2294 17.4795C18.1105 17.4737 17.994 17.514 17.9054 17.5916L15.5596 19.6803L14.9585 19.0363L15.7355 17.7471C17.0127 17.138 18.5018 16.4207 20.1736 15.6093C20.215 15.5891 20.2533 15.5691 20.2945 15.5489L28.7247 24.5778ZM23.496 3.12824L18.6653 11.1459L13.8023 13.4262C14.2837 12.6451 14.8273 11.7672 15.441 10.7783C19.1232 4.85697 22.1369 3.4539 23.496 3.12824ZM10.1801 13.9185L12.5259 11.8301C12.5702 11.7912 12.6062 11.7442 12.6319 11.6916C12.6575 11.6391 12.6722 11.5822 12.6752 11.5241C12.6782 11.466 12.6694 11.4079 12.6492 11.3531C12.6291 11.2984 12.5981 11.248 12.5579 11.205C12.5178 11.1621 12.4693 11.1273 12.4153 11.1027C12.3614 11.078 12.3029 11.0641 12.2434 11.0617C12.1839 11.0592 12.1244 11.0683 12.0685 11.0884C12.0126 11.1085 11.9613 11.1392 11.9176 11.1787L9.5718 13.2672L8.18407 11.781L9.78577 10.3551C9.83011 10.3162 9.86614 10.2692 9.89177 10.2167C9.9174 10.1642 9.93213 10.1072 9.93511 10.0491C9.93809 9.991 9.92926 9.9329 9.90913 9.87815C9.889 9.82339 9.85797 9.77307 9.81783 9.73008C9.77768 9.6871 9.72922 9.6523 9.67523 9.62769C9.62125 9.60308 9.56281 9.58915 9.50328 9.5867C9.44376 9.58426 9.38432 9.59334 9.32841 9.61343C9.2725 9.63352 9.22121 9.66422 9.17751 9.70376L7.57584 11.1296L6.18807 9.64327L7.78981 8.21747C7.83384 8.17853 7.86957 8.13149 7.89494 8.07904C7.92032 8.02659 7.93484 7.96976 7.93767 7.91182C7.94051 7.85388 7.9316 7.79596 7.91147 7.74139C7.89133 7.68681 7.86036 7.63666 7.82033 7.5938C7.7803 7.55094 7.732 7.51621 7.6782 7.49162C7.62439 7.46702 7.56615 7.45304 7.5068 7.45047C7.44745 7.4479 7.38817 7.45679 7.33235 7.47664C7.27653 7.49649 7.22527 7.52691 7.18151 7.56614L5.57985 8.99191L4.19211 7.50565L6.53813 5.41719C6.62549 5.33815 6.67732 5.22861 6.68233 5.11243C6.68734 4.99625 6.64512 4.88284 6.56487 4.79691C6.48463 4.71099 6.37286 4.65951 6.25392 4.65369C6.13498 4.64788 6.0185 4.6882 5.92987 4.76586L3.58392 6.85425L2.24677 5.42221L6.93882 1.24527L14.9713 9.84802C14.8708 10.0047 14.7707 10.1582 14.6692 10.3214C13.7334 11.8293 12.9606 13.0791 12.3234 14.1195L10.9631 14.7573L10.1801 13.9185ZM8.08261 18.262C7.6011 19.1822 6.81576 19.9169 5.85362 20.3473C3.90542 21.2607 1.77385 20.8929 1.10191 19.5272C0.429968 18.1616 1.4691 16.3072 3.4173 15.3936C5.3655 14.48 7.49725 14.848 8.16884 16.2136C8.20603 16.29 8.23816 16.3687 8.26505 16.4491C8.2852 16.5085 8.31809 16.5631 8.36154 16.6092C8.405 16.6552 8.45801 16.6917 8.51704 16.7162C8.57608 16.7407 8.63978 16.7526 8.7039 16.7511C8.76802 16.7497 8.83108 16.7349 8.88888 16.7077L12.8284 14.8605L12.837 14.8565L19.1753 11.8843L19.1825 11.881L28.2543 7.62717C27.8067 8.92538 26.1201 11.738 19.7715 14.8199C18.0348 15.663 16.4928 16.4056 15.1844 17.0291C14.3723 16.676 13.5411 16.3664 12.6945 16.1015C12.5927 16.0768 12.4852 16.0876 12.3907 16.132L8.29544 18.0523C8.20184 18.0962 8.12676 18.1702 8.08261 18.262ZM9.06877 28.5497C7.73162 27.78 7.53575 25.6745 8.63241 23.8559C9.15165 22.9555 9.9671 22.2526 10.9466 21.8613C11.0439 21.826 11.1257 21.759 11.1783 21.6717L13.4822 17.8502C13.5358 17.7624 13.5559 17.6589 13.5391 17.558C13.5275 17.486 13.5086 17.3972 13.4863 17.3004C13.8993 17.4577 14.3401 17.6362 14.6719 17.7738L12.602 21.2086C12.5696 21.2624 12.5492 21.3224 12.5423 21.3844C12.5354 21.4465 12.5421 21.5093 12.5619 21.5687C12.5817 21.6281 12.6142 21.6827 12.6573 21.7288C12.7004 21.775 12.753 21.8117 12.8117 21.8366C12.8914 21.8702 12.9693 21.9078 13.0451 21.9491C14.382 22.719 14.5777 24.8243 13.4818 26.6429C12.3858 28.4606 10.4059 29.3158 9.06877 28.5497Z"
      fill="black"
      fillOpacity="0.85"
    />
    <path
      d="M12.9218 26.392C13.7902 24.9507 13.6725 23.3642 12.6545 22.7793C12.3711 22.6329 12.0537 22.5604 11.7332 22.569C11.4126 22.5776 11.0998 22.667 10.825 22.8284C10.2058 23.1739 9.68675 23.6675 9.31665 24.2628C8.94655 24.8581 8.73756 25.5355 8.70932 26.2313C8.68531 26.5606 8.75118 26.8903 8.90021 27.1867C9.04924 27.483 9.2761 27.7355 9.55765 27.9183C9.84109 28.0647 10.1585 28.1371 10.479 28.1285C10.7995 28.1199 11.1123 28.0306 11.3871 27.8692C12.0299 27.5264 12.5616 27.0147 12.9218 26.392ZM10.0155 27.1585C9.52508 26.8766 9.42584 25.8193 10.0685 24.7526C10.3432 24.2755 10.747 23.8813 11.2357 23.6133C11.3781 23.5266 11.5397 23.4746 11.7069 23.4617C11.8742 23.4487 12.0422 23.4753 12.1967 23.5391C12.3387 23.6493 12.4497 23.793 12.5194 23.9565C12.5892 24.12 12.6153 24.2981 12.5955 24.4742C12.568 25.0061 12.4057 25.523 12.1231 25.9786C11.8406 26.4342 11.4466 26.8141 10.9766 27.0844C10.8343 27.1711 10.6726 27.2231 10.5053 27.236C10.338 27.2489 10.17 27.2224 10.0155 27.1585Z"
      fill="black"
      fillOpacity="0.85"
    />
    <path
      d="M15.7793 15.0847C15.774 14.9323 15.7083 14.7878 15.596 14.6818C15.4837 14.5758 15.3337 14.5166 15.1775 14.5166C15.0213 14.5166 14.8713 14.5758 14.759 14.6818C14.6467 14.7878 14.581 14.9323 14.5757 15.0847C14.581 15.2371 14.6467 15.3815 14.759 15.4875C14.8713 15.5935 15.0213 15.6527 15.1775 15.6527C15.3337 15.6527 15.4837 15.5935 15.596 15.4875C15.7083 15.3815 15.774 15.2371 15.7793 15.0847Z"
      fill="black"
      fillOpacity="0.85"
    />
  </svg>
);

const MadeToMeasureIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={MadeToMeasureSvg} {...props} />
);

export default MadeToMeasureIcon;