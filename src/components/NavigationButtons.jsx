import { useNavigate } from 'react-router-dom';
import cn from '../lib/utils';

export default function NavigationButtons({ className, register, manage }) {
  const navigate = useNavigate()

  return (
    <div className={cn('flex gap-1', register && 'dm:flex-col', className)}>
      <button className={cn('btn-third md:mx-0 dm:text-xs', manage && 'btn-primary mx-0 border-0 text-sm md:w-fit')} type="button" onClick={() => navigate("/loja")}>Ir para a loja</button>
      {!register &&
        <button className={cn('btn-third mx-0 dm:text-xs', manage && 'btn-primary border-0 text-sm md:w-fit')} type="button" onClick={() => navigate("/")}>Ir para login</button>
      }
      {!register &&
        <button className={cn('btn-third mx-0 dm:text-xs', manage && 'btn-primary border-0 text-sm md:w-fit')} type="button" onClick={() => navigate("/cadastrar-produtos")}>Ir para cadastro</button>
      }
      {!manage &&
        <button className='btn-third md:mx-0' type="button" onClick={() => navigate("/gerenciar-produtos")}>Ir para produtos</button>
      }
    </div>
  )
}
