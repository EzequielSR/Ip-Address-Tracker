interface SearchIpProps {
    ipAddress: string;
    onIpAddressChange: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}
export default function SearchIp({ ipAddress, onIpAddressChange, onSubmit }: SearchIpProps) {
    return (
        <form onSubmit={onSubmit} className='w-full max-w-xl relative mb-6'>
            <input type="text" value={ipAddress} onChange={(e) => onIpAddressChange(e.target.value)} placeholder='Search for any Ip address or domain'  className='w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl rounded-xl text-base sm:text-lg focus:outline-none shadow-md bg-white'/>
            <button type='submit' className='absolute right-0 top-0 bottom-0 bg-black hover:bg-gray-800 text-white px-4 sm:px-6 rounded-r-xl transition-colors flex items-center justify-center' aria-label='Search'>
                <img src="/images/icon-arrow.svg" alt="Icon Arrow Image" className='w-5 h-6'/>
    
            </button>
        </form>
    )
}