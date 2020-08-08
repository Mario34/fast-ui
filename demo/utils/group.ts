import { COMPONENTS_GROUP } from '@/demo/constant';
import { SidebarConfigItem, SubItem } from '@/demo/components/sidebar';
import { RouteRecordRaw } from 'vue-router';

function generateGroups(routes:RouteRecordRaw[]):SidebarConfigItem[] {
  return COMPONENTS_GROUP.map(group => {
    const items:SubItem[] = [];

    group.items.forEach(keys => {
      const target = routes.find(route => route.name === keys[0]);
      if (target) {
        items.push({
          title: toHump(`${String(target.name)} ${keys[1]}`),
          name: String(target.name),
        });
      }
    });
    return {
      title: group.title,
      items,
    };
  });
}

export function toHump(name:string) {
  return name.replace(/-(\w)/g, function(all, letter) {
    return letter.toUpperCase();
  });
}

export default generateGroups;
