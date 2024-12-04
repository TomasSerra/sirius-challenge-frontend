import SearchBar from '@/components/ui/inputs/searchbar/Searchbar'
import styles from './Header.module.scss'

type HeaderProps = {
    onSearch?: (query: string) => void;
}

const Header = ({onSearch=()=>{}}: HeaderProps) => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>

        </div>
        <SearchBar width='640px' onSearch={onSearch}/>
        <div className={styles.profile}>

        </div>
    </header>
  )
}

export default Header