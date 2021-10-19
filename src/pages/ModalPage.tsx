import { useState } from 'react';
import Modal from '../components/Modal';

const ModalPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='w-full h-screen bg-gray-900 text-white flex items-center justify-center'>
			<button
				className='bg-indigo-600 text-gray-50 text-sm px-2 py-1 rounded shadow hover:bg-indigo-700'
				onClick={() => setIsOpen(true)}
			>
				Open Modal
			</button>
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				className='rounded-md shadow-2xl bg-gray-700 text-white'
			>
				<div
					className='h-80 w-96 z-20 flex items-center justify-center'
					onClick={e => e.stopPropagation()}
				>
					hello world
				</div>
			</Modal>
		</div>
	);
};

export default ModalPage;
