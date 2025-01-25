import { X } from "lucide-react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  date: string;
}
const Modal = ({ isOpen, onClose, title, content, date }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#2D3648] mb-2">
                {title}
              </h2>
              <p className="text-gray-500">{date}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          <div className="prose max-w-none">
            <img
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
              alt="Article header image"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <div className="text-gray-600 space-y-4">
              {content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className=" text-white px-6 py-2 rounded-full bg-[#F43F5E] hover:bg-[#E11D48] transition-colors"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
