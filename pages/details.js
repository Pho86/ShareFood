import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
      <div>
     details page
      </div>
    )
  }